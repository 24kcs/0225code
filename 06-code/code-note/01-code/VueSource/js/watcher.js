function Watcher(vm, expOrFn, cb) {
    this.cb = cb;
    this.vm = vm;
    this.expOrFn = expOrFn;
    this.depIds = {};

    if (typeof expOrFn === 'function') {
        this.getter = expOrFn;
    } else {
        this.getter = this.parseGetter(expOrFn.trim());
    }

    this.value = this.get();
}

Watcher.prototype = {
    update: function() {
        this.run();
    },
    run: function() {
        var value = this.get();
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    },
    addDep: function(dep) {
        //关键----发生关系的地方
        if (!this.depIds.hasOwnProperty(dep.id)) {
            //把watcher真正的添加到dep中
            dep.addSub(this);
            //把dep及自己的id值以键值对的方式添加到watcher对象的depIds中
            this.depIds[dep.id] = dep;
        }
    },
    get: function() {
        //把watcher对象保存到dep对象的target属性中
        Dep.target = this;
        //自动调用了get方法---就会直接去observer中的get方法中,就会把watcher和dep进行联系
        var value = this.getter.call(this.vm, this.vm);
        Dep.target = null;
        return value;
    },

    parseGetter: function(exp) {
        if (/[^\w.$]/.test(exp)) return; 

        var exps = exp.split('.');

        return function(obj) {
            for (var i = 0, len = exps.length; i < len; i++) {
                if (!obj) return;
                //自动的开始调用了,vm中data中的属性的get方法
                obj = obj[exps[i]];
            }
            return obj;
        }
    }
};
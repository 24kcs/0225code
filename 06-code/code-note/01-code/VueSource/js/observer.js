function Observer(data) {
    //把vm中的data保存到当前的劫持对象的data中
    this.data = data;
    //开启监视
    this.walk(data);
}

Observer.prototype = {
    walk: function(data) {
        //保存当前劫持对象
        var me = this;
        //遍历vm的data中所有的属性
        Object.keys(data).forEach(function(key) {
            me.convert(key, data[key]);
        });
    },
    convert: function(key, val) {
        this.defineReactive(this.data, key, val);
    },

    //遍历所有属性,为每个属性对应一个dep,并且带id值,subs属性
    defineReactive: function(data, key, val) {
        //new 一个dep对象
        var dep = new Dep();
        var childObj = observe(val);

        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            //不管是vm中的data,还是劫持对象中data   他们中都有vm中data中的属性
            //只要是vm中的属性获取的时候,就会自动的触发当前的get
            get: function() {
                if (Dep.target) {
                    //此时dep对象中就有了watcher对象
                    dep.depend();
                }
                return val;
            },
            set: function(newVal) {
                if (newVal === val) {
                    return;
                }
                val = newVal;
                // 新的值是object的话，进行监听
                childObj = observe(newVal);
                // 通知订阅者
                dep.notify();
            }
        });
    }
};

function observe(value, vm) {
    if (!value || typeof value !== 'object') {
        return;
    }

    return new Observer(value);
};


var uid = 0;

function Dep() {
    this.id = uid++;
    this.subs = [];
}

Dep.prototype = {
    addSub: function(sub) {
        //把watcher对象添加到当前的dep对象的subs数组中
        this.subs.push(sub);
    },

    depend: function() {
        //把当前的dep保存到watcher的depIds中
        Dep.target.addDep(this);
    },

    removeSub: function(sub) {
        var index = this.subs.indexOf(sub);
        if (index != -1) {
            this.subs.splice(index, 1);
        }
    },

    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
};

Dep.target = null;
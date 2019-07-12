function MVVM(options) {
    //把传进来的整个的配置对象进行保存({el:'#app;,data:{}})
    this.$options = options || {};
    //this.$options=====>{el:'#app;,data:{}}
    //this.$options.data====>data
    //this---->实例对象----就相当于vue中的vm
    //data---->vm._data---->data
    var data = this._data = this.$options.data;
    //把vm实例对象保存到me变量中
    var me = this;

    //实现了数据代理的操作
    //遍历data中所有的属性(可枚举的属性)--->data.name
    //key----->"name"
    Object.keys(data).forEach(function(key) {
        //实现代理
        me._proxyData(key);//"name"
    });

    this._initComputed();

    observe(data, this);

    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },

    //实现代理------>key----"name"
    _proxyData: function(key, setter, getter) {
        //me----->vm实例对象
        var me = this;

        setter = setter || 
        Object.defineProperty(me, key, {//为某个对象添加属性,并且配置该属性
            //为vm 添加了 一个 "name"属性
            //vm['name']---->vm.name
            //因为不可重新定义
            configurable: false,
            enumerable: true,//可以被枚举
            get: function proxyGetter() {
                //vm._data['name']
                return me._data[key];
            },
            set: function proxySetter(newVal) {
                //如果name属性值改变就会进来
                // vm._data['name']='您好'
                // vm['name']='您好'
                me._data[key] = newVal;
            }
        });
    },

    _initComputed: function() {
        var me = this;
        var computed = this.$options.computed;
        if (typeof computed === 'object') {
            Object.keys(computed).forEach(function(key) {
                Object.defineProperty(me, key, {
                    get: typeof computed[key] === 'function' 
                            ? computed[key] 
                            : computed[key].get,
                    set: function() {}
                });
            });
        }
    }
};
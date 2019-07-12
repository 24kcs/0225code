//Vue的构造函数---MVVM的构造函数
function MVVM(options) {
    //把配置对象{el,data....}保存起来
    //保存到当前实例对象的$options属性中
    this.$options = options || {};
    //data变量和_data中都保存了vm实例对象中data对象
    var data = this._data = this.$options.data;
    //保存了当前vue的实例对象
    var me = this;

    //遍历data中所有的属性,实现的数据代理
    Object.keys(data).forEach(function(key) {
        //真正实现代理的操作
        me._proxyData(key);
    });
    this._initComputed();

    //最难的东西---源码分析
    observe(data, this);
    //模版解析的代码----把当前的el对象传进去
    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },
    //真正实现了数据代理的操作
    _proxyData: function(key, setter, getter) {
        //保存当前实例对象
        var me = this;
        setter = setter || 
        Object.defineProperty(me, key, {//为vm实例对象添加属性
            configurable: false,
            enumerable: true,
            get: function proxyGetter() {
                //返回_data['属性名字']===当前这个属性对应的属性的值
                return me._data[key];
            },
            set: function proxySetter(newVal) {
                //设置_data[属性名字]=值
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
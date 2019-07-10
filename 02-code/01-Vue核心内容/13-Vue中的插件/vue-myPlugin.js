(function (window) {
    const MyPlugin = {}
    //这个方法必须存在
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            // 逻辑...
            console.log('我是全局方法')
        }

        // 2. 添加全局资源
        Vue.directive('my-directive', {
            bind(el, binding) {
                // 逻辑...
                el.textContent = binding.value + '===' + '插件'
            }
        })


        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            // 逻辑...
            console.log('我是局部的方法')
        }
    }
    window.MyPlugin = MyPlugin
})(window)
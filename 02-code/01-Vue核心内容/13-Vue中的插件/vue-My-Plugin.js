(function (window) {
  //定义插件对象  
  const MyPlugin = {}

  //下面的这个install方法是必须的
  MyPlugin.install=function(Vue){
    //把方法变成Vue的一个全局方法
    Vue.GlobalShow=function(){
      console.log('我是插件的全局的方法')
    }
    //自定义的指令
    Vue.directive('text-test',function(el,binding){
      el.textContent=binding.value+'==='+'您好'
    })
    //把方法变成Vue的实例对象的方法
    Vue.prototype.$GlobalShow=function(){
      console.log('我是实例的方法')
    }
  }
  //暴露给window
  window.MyPlugin = MyPlugin
})(window)
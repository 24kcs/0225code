/**
 * 
 * 自己实现事件总线的绑定和分发及解绑
 * 
 * 实现绑定:事件类型,回调函数
 * $bus.$on('事件类型',回调函数)及$off()及$emit()功能
 * 事件类型click---事件名字click
 * 
 * 事件总线的对象
 * 容器:{add:[f1,f2,f3,f4],del:[f1,f2,f3]}
 * 绑定事件的方法
 * .on(eventName,listener)
 * 分发事件的方法
 * .emit(eventName,data)
 * 
 * 解绑事件的方法
 * .off(eventName)
 * .on('add',function(){})
 * .on('add',function(){})
 * 
 * .emit('add')
 * 
 * 
 * 
 * 
 */

(function (window) {
  //事件总线对象
  const EventBus = {}
  //保存所有的事件及对应的函数的容器对象
  let listenersContainer = {}

  //绑定事件
  /**
   * 
   * eventName:----事件的类型---事件的名字
   * listener---回调函数
   * 
   */
  //{add:[f1,f2,f3,f4],del:[f1,f2,f3]}
  //{add:[f1,f2],del:[f3]}
  //add   f1()
  EventBus.on = function (eventName, listener) {
    //根据事件的名字去大的容器中,有没有对应的存储回调函数的数组容器
    let listeners = listenersContainer[eventName]
    //判断事件名字对应的数组是否存在
    if (!listeners) {
      //此时没有,则创建这个数组容器
      listeners = []
      //根据事件名字及对应的数组容器以键值对的方式存储到大的容器中
      listenersContainer[eventName] = listeners
    }
    //把传进来的回调函数存储到数组的容器中农
    listeners.push(listener)

  }
  //分发事件
  //{add:[f1,f2],del:[f3]}   .emit('add','您好')
  EventBus.emit = function (eventName,data) {
      //根据事件的名字获取对应的存储回调函数的数组
      let listeners=listenersContainer[eventName]
      //直接判断是否存储回调函数的容器
      if(listeners&&listeners.length>0){
        listeners.forEach(listener=>{
          listener(data)
        })
      }
  }

  //解绑事件
  EventBus.off=function(eventName){
    //判断
    if(eventName===undefined){
      listenersContainer={}
    }else{
      
      //{add:[f1,f2],del:[f3]} 
      delete listenersContainer[eventName]
      //或者
      //listenersContainer[eventName]=[]
    }
  }

  //暴露给window
  window.EventBus = EventBus
})(window)
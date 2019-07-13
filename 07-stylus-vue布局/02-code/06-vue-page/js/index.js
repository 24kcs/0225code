window.onload = function () {

  //获取footer中所有的footerItem类样式的标签
  var footerItems = document.querySelectorAll(".app .footer .footerItem")
  //获取content 中的所有的section
  var sections = document.querySelectorAll(".app .content section")


  
  for (var i = 0; i < footerItems.length; i++) {
    (function(i){
      var item = footerItems[i]
      item.addEventListener('touchend', function () {
        for(var j=0;j<footerItems.length;j++){
          footerItems[j].className="footerItem"
          sections[j].className=""
        }
        //设置当前点击的
        this.className="footerItem active"
        sections[i].className="on"
      }, false)
    })(i)
  }

  // for (var i = 0; i < footerItems.length; i++) {
  //   var item = footerItems[i]
  //   item.index=i
  //   item.addEventListener('touchend', function () {
  //     for(var j=0;j<footerItems.length;j++){
  //       footerItems[j].className="footerItem"
  //       sections[j].className=""
  //     }
  //     //设置当前点击的
  //     this.className="footerItem active"
  //     sections[this.index].className="on"
  //   }, false)
  // }

  //循环遍历所有的footerItem，添加事件监听
  // for (let i = 0; i < footerItems.length; i++) {
  //   var item = footerItems[i]
  //   item.addEventListener('touchend', function () {
  //     for(var j=0;j<footerItems.length;j++){
  //       footerItems[j].className="footerItem"
  //       sections[j].className=""
  //     }
  //     //设置当前点击的
  //     this.className="footerItem active"
  //     sections[i].className="on"
  //   }, false)
  // }
  //重置所有的footerItem的类样式




  new Swiper('.swiper-container', {
    //中间的间隔
    spaceBetween: 30,
    //自动的轮播
    centeredSlides: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: true,
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true
  });
}
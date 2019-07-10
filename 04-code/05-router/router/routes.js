//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import MessageDetail from '../pages/messagedetail.vue'
export default[
  //配置路由中的路径及组件
  {
    path:'/about',
    component:About
  },
  {
    path:'/home',
    component:Home,
    children:[
      {
        path:'/home/news',
        component:News
      },
      {
        path:'/home/message',
        component:Message,
        children:[
          {
            path:'/home/message/detail/:id',
            component:MessageDetail
          }
        ]
      },
      {
        path:'/home',
        redirect:'/home/news'
      }
    ]
  },
  {
    path:'',
    redirect:'/about'
  }
]
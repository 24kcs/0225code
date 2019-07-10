/**
 * 
 * 
 * 复习:
 * 
 * vue中的核心内容
 * 按键修饰符: 
 * @keyup.enter="回调函数"
 * @keyup.13="回调函数"
 * .alt
 * .ctrl
 * .shift
 * 过渡和动画
 * 如果该标签有过渡的效果,一般该标签都会放在vue中内置的一个组件中
 * 内置组件:<transition>标签
 * <transition name="fade">
 *  <p>这是一个p</p>
 * </transition>
 * 过渡的样式的代码---css代码
 * style的标签中书写
 * .fade-enter-active-----元素从无到有的过程中用到的样式
 * .fade-leave-active-----元素从有到无的过程中用到的样式
 * 无论是什么元素,过渡的过程中都有三个阶段(显示有三个阶段,隐藏也有三个阶段)
 * .fade-enter---显示的时候开始的状态样式
 * .fade-enter-active----显示的时候过渡的样式
 * .fade-enter-to----显示的时候结束的状态
 * .fade-leave---隐藏的时候开始的状态
 * .fade-leave-active---隐藏的时候的过渡的样式
 * .fade-leave-to---隐藏的时候的结束的状态
 * 
 * 
 * 
 * 内置指令及自定义指令
 * 内置指令:vue自带的,可以直接使用的指令(所谓的指令,本质也是html标签的属性)
 * 自定义指令:全局自定义指令,局部的自定义指令
 * 全局自定义指令:Vue.directive('指令的名字',回调函数)
 * 自定义指令的时候,指令名字不需要加v-
 * 但是,使用的时候必须加v-开头
 * 局部自定义指令:在Vue的实例对象中directives:{}
 * '指令名字':回调函数----简写: '指令名'(){} 
 * 自定义指令的时候里面的回调函数,一般使用两个参数:
 * el----当前的元素
 * binding----可以获取该元素中所有的属性(使用很多属性)
 * 自定义指令,一般也可以用在自定义插件中
 * 过滤器:Vue中的过滤器 
 * Vue.filter('过滤器的名字',回调函数)-----格式化日期或者是时间,Moment---需要引入
 * 自定义插件:必须要遵循Vue的规定,里面必须要有一个方法,install方法
 * Vue的生命周期:
 * 8个方法:
 * beforeCreate()-------数据初始化之前调用
 * created()-----数据初始化之后
 * beforeMount()----界面显示之前
 * mounted()----界面显示之后
 * beforeUpdate()-----数据更新前
 * updated()----数据更新后
 * beforeDestroy()----销毁Vue实例对象之前
 * destroyed()-----销毁Vue实例对象之后
 * 
 * 使用webpack之前要先安装vue脚手架2的版本
 * npm install vue-cli -g  全局安装
 * vue init webpack 项目名字
 * 提示的所有的信息中,可以选择一路回车,有选择的安装,eslint的这个选项是y,其他是n
 * 
 * 分析源码,
 * 在webpack下载好的模版中,
 * src目录:
 * main.js----项目入口.js文件
 * App.vue----父级组件
 * components目录----普通的组件
 * build目录----webpackbase.json.conf.js可以设置路径
 * config目录------index.js文件,中可以设置浏览器是否自动打开浏览项目
 * static目录------全局使用的相关资源(css,js)
 * 使用组件前:要先引入,注册,添加模版(可写可不写)
 * 
 * TodoList---拆分了四个组件
 * 组件之间的通信问题:
 * 1.props-------首先把数据通过强制绑定数据的方式传到当前的子组件的标签中,如果子组件中需要用到该数据,请使用props进行设置
 * props:['属性名']
 * props:{
 *  属性名:类型
 * }
 * props:{
 *  属性名:{
 *  type:类型,
 *  required:true,必须
 * }
 * }
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
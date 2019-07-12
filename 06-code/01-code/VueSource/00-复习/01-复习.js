/**
 * 
 * vuex-----插件----管理状态数据----状态数据的仓库---Store
 * 安装,引入,声明使用插件
 * Vue.use(Vuex)
 * 实例化
 * new Vuex.Store({
 *  state,
 *  mutations,
 *  actions,
 *  getters
 * })
 * 
 * state对象:包含多个状态数据的对象
 * mutations对象:包含多个直接修改状态数据的方法的对象
 * 里面的每个方法就是一个mutation,每个mutation都有自己的类型type,,直接点:函数都有自己的函数名,函数名可以是常量
 * 单独抽取出一个文件:mutation-types.js 里面定义常量
 * 官网推荐使用这种方式,在任何的位置提交mutation的时候(调用mutations中方法的时候)
 * 可以直接传常量名,不用自己手写字符串的方式了
 * increment(){}在mutations中的方法
 * 外部调用 this.$store.commit('increment')
 * 有了常量了:并且定义了常量:export const INCREMENT='increment'
 * this.$store.commit(INCREMENT)
 * 
 * actions对象:包含了多个间接修改状态数据的方法的对象
 * 一般都是异步的方法居多
 * getters:包含了多个状态数据的计算属性的getter方法
 * 
 * 只要界面的模版中使用了数据(data中定义的----移植到state中书写)此时就会涉及到vuex进行集中管理和操作
 * 至于state中具体写什么东西,看需求(data中写的,或者是模版中使用的)
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
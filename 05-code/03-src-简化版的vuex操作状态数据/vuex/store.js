import Vue from 'vue'
import Vuex from 'vuex'
//声明使用
Vue.use(Vuex)

//这是个对象,里面包含了多个状态数据(都是属性和值的关系)-----data中的都可以拿过来
const state = {
  count: 0
}
//包含了多个可以直接修改状态数据的方法的这么一个对象
const mutations = {//一般情况,同步的操作的代码,都是放在mutations中
  //每个函数都可以叫一个mutation
  INCREMENT(state) {
    state.count++
  },
  DECREMENT(state) {
    state.count--
  }
}
//包含了多个可以间接修改状态数据的方法的这么一个对象
const actions = {//一般情况,异步的操作的代码,都是放在actions中
  increment(context) {
    context.commit('INCREMENT')
  },
  decrement({ commit }) {
    commit('DECREMENT')
  },
  incrementIfOdd({commit,state}) {
    if(state.count%2!==0){
      commit('INCREMENT')
    }
  },
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000);
  }
}
//包含了多个状态数据的计算属性的getter操作的方法的对象
const getters = {
  evenOrOdd(state){
    return state.count%2===0?'偶数':'奇数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

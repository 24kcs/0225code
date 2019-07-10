//包含了多个直接修改状态数据的方法的对象

import { REQUESTING, REQ_SUCCESS, REQ_ERROR } from './mutation-types.js'
export default {
  //请求的mutation
  [REQUESTING](state) {
    state.firstView = false; //请输入搜索的这个不显示
    state.loading = true; //显示的是正在加载...
  },
  //请求成功后的mutation
  [REQ_SUCCESS](state, users) {
    state.users = users;
    state.loading = false;
  },
  //请求失败的mutation
  [REQ_ERROR](state, error) {
    state.loading = false;
    state.errorMsg = error
  }
}
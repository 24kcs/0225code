//包含了多个间接修改状态数据的方法的对象
//引入axios
import axios from 'axios'
//引入常量
import { REQUESTING, REQ_SUCCESS, REQ_ERROR } from './mutation-types.js'
export default {

  //异步操作,修改状态数据
  async search({ commit },searchName) {
    //修改一次请求的状态
    commit(REQUESTING)
    try {
      const url = `https://api.github.com/search/users`;
      //传入地址后,还要对后面的参数进行配置
      const response = await axios.get(url, {
        params: {
          q: searchName
        }
      });
      //显示获取到的数据
      const result = response.data.items;
      //遍历数据
      const users = result.map(item => ({
        login: item.login,
        avatar_url: item.avatar_url,
        html_url: item.html_url
      }));
      //修改状态数据--成功
      commit(REQ_SUCCESS,users)

    } catch (error) {
      //修改状态
      commit(REQ_ERROR,error)
    }
  }


}
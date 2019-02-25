/***
 * @author  houyusi
 * @createTime   2018-12-26
 * @updateTime   2018-12-26
 * @description  store module
 */
import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules/index';

Vue.use(Vuex);
export default new Vuex.Store({
  state : {
    count: 30
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  actions : {
    someAsyncTask ({ commit }) {
      // do something async
      commit('increment')
    }
  },
  // 添加模块
  modules,
  //开启严格模式，仅需在创建 store 的时候传入 strict: true：
  strict: process.env.NODE_ENV !== 'production'
});

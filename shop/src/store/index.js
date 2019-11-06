import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:'首页'
  },
  mutations: {
    change(state,name){
      state.name=name;
    }
  },
  actions: {
  },
  modules: {
  }
})

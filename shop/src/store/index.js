import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{
      id:'',
      userName:"未登录",
      path:"/mine",
      login:false
    }
  },
  mutations: {
    loginInfo(state,[userName,path]){
      state.userInfo.userName=userName;
      state.userInfo.path=path;
    },
    changeLogin(state,login){
      state.userInfo.login=login;
    },
    changeId(state,id){
      state.userInfo.id=id;
    }
  },
  actions: {
  },
  modules: {
  }
})

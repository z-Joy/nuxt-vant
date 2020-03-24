import Vue from 'vue'
import Vuex from 'vuex'
import demo from './demo'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
  },
  mutations: {
  },
  modules: {
    demo
  }
})

export default store
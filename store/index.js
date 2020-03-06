import Vue from 'vue'
import Vuex from 'vuex'
import demo from './demo'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    counter: 0
  },
  mutations: {
    increment (state) {
      state.counter++
    }
  },
  modules: {
    demo,
  }
})

export default store
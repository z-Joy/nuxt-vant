import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    demo: 0
  },
  mutations: {
    demo (state) {
      state.demo++
    }
  }
})

export default store
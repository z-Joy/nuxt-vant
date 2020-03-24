const state = ({
  value: 'Hello World',
  counter: 1,
});

const getters = {

};

const mutations = {
  counterAdd (state) {
    state.counter ++;
  }
};

const actions = {

};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
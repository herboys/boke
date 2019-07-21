import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as mutations from './mutations.js'
import * as getters from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uid: '',
    loginSuccess:'',
    token:'123'

  },
  getters,
  actions,
  mutations
})

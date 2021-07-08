import Vue from 'vue'
import Vuex from 'vuex'
import compute from './compute'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    compute
  }
})

export default store

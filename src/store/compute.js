import { getCat } from "@/services/cat"


const state = {
  numbers: [1, 2, 3],

  cat: ''
}

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload)
  },

  UPDATE_CAT(state, payload) {
    state.cat = payload
  }
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  },

  async fetchCat(context) {
    const response = await getCat()
    context.commit('UPDATE_CAT', response.url)
  }
}

const getters = {
  getNumbers(state) {
    return state.numbers
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

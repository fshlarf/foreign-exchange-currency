import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    rates: {}
  },
  getters: {

  },
  mutations: {
    GET_FORMAT_EXCHANGE_CURRENCY(state) {
      axios.get('https://api.exchangeratesapi.io/latest')
      .then(res => {
        state.rates = res.data.rates
        console.log(state.rates)
      })
      .catch(err => {
      })
    }
  },
  actions: {
    getFormatExchangeCurrency({commit}) {
      commit('GET_FORMAT_EXCHANGE_CURRENCY')
    }
  }
})

export default Store
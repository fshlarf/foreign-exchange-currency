import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rates: {},
    arraysCurrency: [],
    showModal: false
  },
  getters: {
  },
  mutations: {
    GET_FORMAT_EXCHANGE_CURRENCY(state) {
      axios.get('https://api.exchangeratesapi.io/latest?base=USD')
      .then(res => {
        state.rates = res.data.rates
      })
      .catch(err => {
      })
    },
    ADD_NEW_CURRENCY(state, newCurrency) {
      if (!newCurrency) {
        return
      }
      const theNewCurrency = newCurrency.toUpperCase()
      let theObject = {}
      let noCurrencyArray = []
      for (let i = 0; i <= Object.entries(state.rates).length; i++) {
        if (Object.keys(state.rates)[i] === theNewCurrency) {
          theObject.currency = Object.keys(state.rates)[i]
          theObject.nominalCurrency =  Object.values(state.rates)[i]
          noCurrencyArray.push(1)
          state.arraysCurrency = ([...state.arraysCurrency, theObject]) 
        } 
      }
      noCurrencyArray.sort()
      noCurrencyArray.reverse()
      if(noCurrencyArray[0] !== 1) {
        state.showModal = true
        console.log(state.showModal);
      }
    },
    DELETE_CURRENCY(state, id) {
      state.arraysCurrency.splice(id, 1)
    },
    CLOSE_MODAL(state) {
      state.showModal = false
    }
  },
  actions: {
    getFormatExchangeCurrency({commit}) {
      commit('GET_FORMAT_EXCHANGE_CURRENCY')
    },
    addNewCurrency({commit}, newCurrency) {
      commit('ADD_NEW_CURRENCY', newCurrency)
    },
    deleteCurrency({commit}, id) {
      commit('DELETE_CURRENCY', id)
    },
    closeModal({commit}) {
      commit('CLOSE_MODAL')
    }
  }
})

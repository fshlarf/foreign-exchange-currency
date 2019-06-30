import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rates: {},
    newCurrency: '',
    arraysCurrency: []
  },
  getters: {
    // getArraysCurrency: state => state.arraysCurrency
  },
  mutations: {
    GET_FORMAT_EXCHANGE_CURRENCY(state) {
      axios.get('https://api.exchangeratesapi.io/latest?base=USD')
      .then(res => {
        state.rates = res.data.rates
        // console.log(Object.keys(state.rates))
        
      })
      .catch(err => {
      })
    },
    ADD_NEW_CURRENCY(state, newCurrency) {
      const theNewCurrency = newCurrency.toUpperCase()
      let theArray = {}
      let noCurrencyArray = []
      for (let i = 0; i <= Object.entries(state.rates).length; i++) {
        if(Object.keys(state.rates)[i] === theNewCurrency) {
          theArray.currency = Object.keys(state.rates)[i]
          theArray.nominalCurrency =  Object.values(state.rates)[i]
          noCurrencyArray.push(1)
          state.arraysCurrency = ([...state.arraysCurrency, theArray]) 
        } else {
        }
      }
      noCurrencyArray.sort()
      noCurrencyArray.reverse()
      if(noCurrencyArray[0] !== 1) {
        alert('gaada')
      }
      console.log(theArray)
    }
  },
  actions: {
    getFormatExchangeCurrency({commit}) {
      commit('GET_FORMAT_EXCHANGE_CURRENCY')
    },
    addNewCurrency({commit}, newCurrency) {
      commit('ADD_NEW_CURRENCY', newCurrency)
    }
  }
})

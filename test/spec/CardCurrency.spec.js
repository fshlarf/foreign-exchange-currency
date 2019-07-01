import { mount } from '@vue/test-utils'
import CardCurrency from '@/components/CardCurrency.vue'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {}
})

describe('CardCurrency', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CardCurrency, {
      store
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

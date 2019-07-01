import { mount } from '@vue/test-utils'
import test from 'ava'
import CardCurrency from '../../components/CardCurrency.vue'

test('is a Vue instance', (t) => {
  const wrapper = mount(CardCurrency)
  t.pass(wrapper.isVueInstance(), true)
})

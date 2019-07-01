import { mount } from '@vue/test-utils'
import test from 'ava'
import CurrentCurrency from '../../components/CurrentCurrency.vue'

test('is a Vue instance', (t) => {
  const wrapper = mount(CurrentCurrency)
  t.is(wrapper.isVueInstance(), true)
})

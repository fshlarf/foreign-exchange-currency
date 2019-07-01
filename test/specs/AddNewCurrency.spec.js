import { mount } from '@vue/test-utils'
import test from 'ava'
import AddNewCurrency from '../../components/AddNewCurrency.vue'

test('is a Vue instance', (t) => {
  const wrapper = mount(AddNewCurrency)
  t.is(wrapper.isVueInstance(), true)
})

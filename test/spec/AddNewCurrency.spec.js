import { mount } from '@vue/test-utils'
import AddNewCurrency from '@/components/AddNewCurrency.vue'

describe('AddNewCurrency', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AddNewCurrency)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

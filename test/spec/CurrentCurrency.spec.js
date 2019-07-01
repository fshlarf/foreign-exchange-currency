import { mount } from '@vue/test-utils'
import CurrentCurrency from '@/components/CurrentCurrency.vue'

describe('CurrentCurrency', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CurrentCurrency)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

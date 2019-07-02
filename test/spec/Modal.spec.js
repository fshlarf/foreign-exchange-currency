import { mount } from '@vue/test-utils'
import Modal from '@/components/Modal.vue'

describe('test AddNewCurrency component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Modal)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

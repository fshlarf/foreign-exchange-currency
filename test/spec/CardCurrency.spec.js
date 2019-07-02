import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import CardCurrency from '@/components/CardCurrency.vue'
import Vuex from 'vuex'
import { __createMocks as createStoreMocks } from './../mocks/index.js'

jest.mock('./../../store/store.js')
const localVue = createLocalVue()
localVue.use(Vuex)

describe('test CardCurrency component', () => {
  let storeMocks
  let wrapper
  beforeEach(() => {
    storeMocks = createStoreMocks()
    wrapper = shallowMount(CardCurrency, {
      store: storeMocks.store,
      localVue
    })
  })
  test('is a Vue instance', () => {
    wrapper = mount(CardCurrency, {store: storeMocks.store})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('It should deleteCurrency action vuex', () => {
    wrapper.find('.ion-md-trash').trigger('click')
    wrapper.find('.label-delete').trigger('click')
    expect(storeMocks.actions.deleteCurrency).toBeCalled()
  })
  test('It should state arraysCurrency', () => {
    expect(storeMocks.state.arraysCurrency).toContain(storeMocks.state.arraysCurrency[0])
  })
})

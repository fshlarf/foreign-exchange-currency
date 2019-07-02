import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import AddNewCurrency from '@/components/AddNewCurrency.vue'
import Vuex from 'vuex'
import { __createMocks as createStoreMocks } from './../mocks/index.js'

jest.mock('./../../store/store.js')
const localVue = createLocalVue()
localVue.use(Vuex)

describe('test AddNewCurrency component', () => {
  let storeMocks
  let wrapper
  beforeEach(() => {
    storeMocks = createStoreMocks()
    wrapper = shallowMount(AddNewCurrency, {
      store: storeMocks.store,
      localVue
    })
  })
  test('is a Vue instance', () => {
    wrapper = mount(AddNewCurrency, {store: storeMocks.store})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('It should deleteCurrency action vuex', () => {
    wrapper.find('.add-currency__btn').trigger('click')
    wrapper.find('.btn-add').trigger('click')
    expect(storeMocks.actions.addNewCurrency).toBeCalled()
  })
})

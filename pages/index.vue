<template>
  <div class="container">
    <CurrentCurrency/>
    <div class="content">
      <div class="content-card"> 
        <CardCurrency/>
      </div>
      <AddCurrency/>
    </div>
    <Modal 
      v-if="isShowModal"
      @closeModal="closeTheModal"
    />
  </div>
</template>

<script>
import CurrentCurrency from '~/components/CurrentCurrency'
import AddCurrency from '~/components/AddNewCurrency'
import CardCurrency from '~/components/CardCurrency'
import Modal from '~/components/Modal'
import Store from '~/store/store'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  store: Store,
  components: {
    CurrentCurrency,
    AddCurrency,
    CardCurrency,
    Modal
  },
  mounted() {
    this.getFormatExCurrency()
  },
  computed: {
   ...mapState({
     isShowModal: 'showModal'
   })
  },
  methods: {
    ...mapActions({
      getFormatExCurrency: 'getFormatExchangeCurrency',
      closeModal: 'closeModal'
    }),
    closeTheModal() {
      this.closeModal()
    }
  }
}
</script>

<style lang="scss" scoped>
.content-card {
  margin-bottom: 20px;
}
</style>


<template>
  <div class="container">
    <CurrentCurrency/>
    <div class="content">
      <div class="content-card"> 
        <CardCurrency/>
      </div>
      <AddCurrency/>
    </div>
  </div>
</template>

<script>
import CurrentCurrency from '~/components/CurrentCurrency'
import AddCurrency from '~/components/AddNewCurrency'
import CardCurrency from '~/components/CardCurrency'
import Store from '~/store/store'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  store: Store,
  components: {
    CurrentCurrency,
    AddCurrency,
    CardCurrency
  },
  mounted() {
    this.getFormatExCurrency()
    
  },
  computed: {
   
  },
  methods: {
    ...mapActions({
      getFormatExCurrency: 'getFormatExchangeCurrency'
    })
  }
}
</script>

<style lang="scss" scoped>
.content-card {
  margin-bottom: 20px;
}
</style>


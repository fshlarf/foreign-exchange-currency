<template>
  <div class="container">
    <CurrentCurrency/>
    <div class="content">
      <AddCurrency/>
    </div>
  </div>
</template>

<script>
import CurrentCurrency from '~/components/CurrentCurrency'
import AddCurrency from '~/components/AddNewCurrency'
import Store from '~/store/store'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  store: Store,
  components: {
    CurrentCurrency,
    AddCurrency
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

<style>

</style>

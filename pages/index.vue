<template>
  <div class="">
    <CurrentCurrency/>
    
  </div>
</template>

<script>
import CurrentCurrency from '~/components/CurrentCurrency'
import Store from '~/store/store'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  store: Store,
  components: {
    CurrentCurrency
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>

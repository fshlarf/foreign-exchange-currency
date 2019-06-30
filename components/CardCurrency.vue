<template>
  <div>
    <div v-for="(item, index) in arraysCurrency" :key="index">
      <div class="card-currency">
        <div class="card-currency__content">
          <div class="header">
            <div class="header__currency">
              {{ item.currency }}
            </div>
            <div class="header__nominal">
              {{ (10 * item.nominalCurrency) }}
            </div>
          </div>
          <div class="currency-detail">{{ currencyDetail(item) }}</div>
          <div>1 USD = {{ item.currency + ' ' + item.nominalCurrency }} </div>
        </div>
        <div class="card-currency__delete" @click="deleteCard(index)">
          (-) delete 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
  },
  computed: {
     ...mapState({
      arraysCurrency: 'arraysCurrency'
    }),
  },
  methods: {
    ...mapActions({
      deleteCurrency: 'deleteCurrency'
    }),
    currencyDetail(item) {
      if(item.currency) {
        return item.currency + ' - Indonesian Rupiah'
      }
    },
    deleteCard(index) {
      this.deleteCurrency(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-currency {
  display: flex;
  margin: 0 30px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  &__content {
    width: 85%;
  }
  &__delete {
    width: 15%;
    text-align: center;
    margin-top: 30px;
    cursor: pointer;
  }
}
.header {
  display: flex;
  font-size: 25px;
  &__nominal {
    margin-left: auto;
    margin-right: 16px;
  }
}
.currency-detail {
  font-style: italic;
  font-weight: 600;
}
</style>


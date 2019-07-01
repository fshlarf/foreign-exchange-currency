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
              {{ (10 * item.nominalCurrency).toFixed(4) }}
            </div>
          </div>
          <div class="currency-detail">{{ setDetailCurrency(item.currency) }}</div>
          <div>1 USD = {{ item.currency + ' ' + item.nominalCurrency.toFixed(4) }} </div>
        </div>
        <div class="card-currency__delete" @click="deleteCard(index)">
          <img class="card-currency__delete-img" src="~/assets/icons/ic-delete.svg"/> delete 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { state } from './../store/store.js'
import MixinCurrencyDetail from './../mixins/MixinCurrencyDetail.vue'

export default {
  props: {
  },
  mixins: [MixinCurrencyDetail],
  computed: {
    ...mapState({
      arraysCurrency: 'arraysCurrency'
    })
  },
  methods: {
    ...mapActions({
      deleteCurrency: 'deleteCurrency'
    }),
    deleteCard(index) {
      this.deleteCurrency(index)
    }
  },
  filters: {
    currencyFormat: function (num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
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
    &-img {
      vertical-align: sub;
      border-style: none;
      width: 20px;
    }
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


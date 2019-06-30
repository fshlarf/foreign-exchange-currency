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
          <div class="currency-detail">{{ currencyDetail(item) }}</div>
          <div>1 USD = {{ item.currency + ' ' + item.nominalCurrency.toFixed(4) }} </div>
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
      if (item.currency === 'IDR') {
        return item.currency + ' - Indonesian Rupiah'
      } else if (item.currency === 'EUR') {
        return item.currency + ' - Euro'
      } else if (item.currency === 'GBP') {
        return item.currency + ' - British Pound'
      } else if (item.currency === 'SGD') {
        return item.currency + ' - Singapore Dollar'
      } else if (item.currency === 'JPY') {
        return item.currency + ' - Japanese Yen'
      } else if (item.currency === 'CAD') {
        return item.currency + ' - Canada Dollar'
      } else if (item.currency === 'HKD') {
        return item.currency + ' - Hongkong Dollar'
      } else if (item.currency === 'ISK') {
        return item.currency + ' - Islandia Krona'
      } else if (item.currency === 'PHP') {
        return item.currency + ' - Philipines Peso'
      } else if (item.currency === 'DKK') {
        return item.currency + ' - Danish Krone'
      } else if (item.currency === 'HUF') {
        return item.currency + ' - Hungaria Forint'
      } else if (item.currency === 'CZK') {
        return item.currency + ' - Czech Koruna'
      } else if (item.currency === 'RON') {
        return item.currency + ' - Romanian Leu'
      } else if (item.currency === 'SEK') {
        return item.currency + ' - Sweden Krona'
      } else if (item.currency === 'INR') {
        return item.currency + ' - India Rupee'
      } else if (item.currency === 'USD') {
        return item.currency + ' - United State Dollar'
      } else if (item.currency === 'BRL') {
        return item.currency + ' - Brazilian Real'
      } else if (item.currency === 'RUB') {
        return item.currency + ' - Russian Ruble'
      } else if (item.currency === 'HRK') {
        return item.currency + ' - Croatian Kuna'
      } else if (item.currency === 'THB') {
        return item.currency + ' - Thai Baht'
      } else if (item.currency === 'CHF') {
        return item.currency + ' - Switzerland Franc'
      } else if (item.currency === 'MYR') {
        return item.currency + ' - Malaysia Ringgit'
      } else if (item.currency === 'BGN') {
        return item.currency + ' - Bulgarian Lev'
      } else if (item.currency === 'TRY') {
        return item.currency + ' - Turkish Lira'
      } else if (item.currency === 'CNY') {
        return item.currency + ' - China Yuan'
      } else if (item.currency === 'NOK') {
        return item.currency + ' - Norwegian Krone'
      } else if (item.currency === 'NZD') {
        return item.currency + ' - New Zealand Dollar'
      } else if (item.currency === 'ZAR') {
        return item.currency + ' - South African Rand'
      } else if (item.currency === 'MXN') {
        return item.currency + ' - Mexico Peso'
      } else if (item.currency === 'AUD') {
        return item.currency + ' - Australian Dollar'
      } else if (item.currency === 'ILS') {
        return item.currency + ' - Israel Shekel'
      } else if (item.currency === 'KRW') {
        return item.currency + ' - South Korean Won'
      } else if (item.currency === 'PLN') {
        return item.currency + ' - Poland Zloty'
      }
      
    },
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


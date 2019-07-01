<template>
</template>

<script>
export default {
  methods: {
    setDetailCurrency(val) {
      if (val === 'IDR') {
        return val + ' - Indonesian Rupiah'
      } else if (val === 'EUR') {
        return val + ' - Euro'
      } else if (val === 'GBP') {
        return val + ' - British Pound'
      } else if (val === 'SGD') {
        return val + ' - Singapore Dollar'
      } else if (val === 'JPY') {
        return val + ' - Japanese Yen'
      } else if (val === 'CAD') {
        return val + ' - Canada Dollar'
      } else if (val === 'HKD') {
        return val + ' - Hongkong Dollar'
      } else if (val === 'ISK') {
        return val + ' - Islandia Krona'
      } else if (val === 'PHP') {
        return val + ' - Philipines Peso'
      } else if (val === 'DKK') {
        return val + ' - Danish Krone'
      } else if (val === 'HUF') {
        return val + ' - Hungaria Forint'
      } else if (val === 'CZK') {
        return val + ' - Czech Koruna'
      } else if (val === 'RON') {
        return val + ' - Romanian Leu'
      } else if (val === 'SEK') {
        return val + ' - Sweden Krona'
      } else if (val === 'INR') {
        return val + ' - India Rupee'
      } else if (val === 'USD') {
        return val + ' - United State Dollar'
      } else if (val === 'BRL') {
        return val + ' - Brazilian Real'
      } else if (val === 'RUB') {
        return val + ' - Russian Ruble'
      } else if (val === 'HRK') {
        return val + ' - Croatian Kuna'
      } else if (val === 'THB') {
        return val + ' - Thai Baht'
      } else if (val === 'CHF') {
        return val + ' - Switzerland Franc'
      } else if (val === 'MYR') {
        return val + ' - Malaysia Ringgit'
      } else if (val === 'BGN') {
        return val + ' - Bulgarian Lev'
      } else if (val === 'TRY') {
        return val + ' - Turkish Lira'
      } else if (val === 'CNY') {
        return val + ' - China Yuan'
      } else if (val === 'NOK') {
        return val + ' - Norwegian Krone'
      } else if (val === 'NZD') {
        return val + ' - New Zealand Dollar'
      } else if (val === 'ZAR') {
        return val + ' - South African Rand'
      } else if (val === 'MXN') {
        return val + ' - Mexico Peso'
      } else if (val === 'AUD') {
        return val + ' - Australian Dollar'
      } else if (val === 'ILS') {
        return val + ' - Israel Shekel'
      } else if (val === 'KRW') {
        return val + ' - South Korean Won'
      } else if (val === 'PLN') {
        return val + ' - Poland Zloty'
      }
    }
  }
}
</script>
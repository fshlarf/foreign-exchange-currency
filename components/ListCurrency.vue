<template>
<div class="container">
  <label @click="showSuggestion">Show all currencies</label>
  <div class="list-currency" v-if="isShowCurrencies">
    <i class="list-currency__close icon ion-md-close" @click="closeSuggestion"></i>
    <div class="list-currency__container" v-for="(key, value, index) in Object.entries(rates)" :key="index">
      <div @click="chooseCurrency(key[0])">{{ key[0] }}</div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      isShowCurrencies: false
    }
  },
  computed: {
    ...mapState({
      rates: 'rates'
    })
  },
  methods: {
    ...mapActions({
      addNewCurrency: 'addNewCurrency'
    }),
    showSuggestion() {
      this.isShowCurrencies = !this.isShowCurrencies
    },
    closeSuggestion() {
      this.isShowCurrencies = false
    },
    chooseCurrency(key) {
      this.addNewCurrency(key)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0px 19px;
  label {
    font-style: italic;
    cursor: pointer;
    &:hover {
      color: #007bff;
    }
  }
}
.list-currency {
  font-size: 15px;
  display: flex;
  border: 1px solid #ccc;
  padding: 6px 15px;
  border-radius: 10px;
  flex-wrap: wrap;
  &__close {
    width: 100%;
    text-align: right;
    cursor: pointer;
  }
  &__container {
    margin-right: 20px;
    &:hover {
      color: #007bff;
      cursor: pointer;
    }
  }
}
</style>

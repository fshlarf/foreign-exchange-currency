<template>
  <div class="current-currency">
    <h5 class="current-currency__title">{{ title }}</h5>
    <div class="current-currency__content">
      <div class="current-currency__content-name">
        {{ nameCurrency }}
      </div>
      <div class="current-currency__content-nominal">
        {{ nominal.toFixed(2) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'USD - United States Dollars'
    },
    nameCurrency: {
      type: String,
      default: 'USD'
    },
    nominal: {
      type: Number,
      default: 10
    }
  }
}
</script>

<style lang="scss" scoped>
.current-currency {
  padding: 16px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
  &__title {

  }
  &__content {
    display: flex;
    font-size: 25px;
    &-nominal {
      margin-left: auto;
    }
  }
}
</style>


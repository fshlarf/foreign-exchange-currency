<template>
  <div>
    <div v-for="(item, index) in arraysCurrency" :key="index"
      draggable="true" 
      @dragstart="dragStart(index, $event)" 
      @dragover.prevent
      @dragend="dragEnd" 
      @drop="dragFinish(index, $event)"
    >
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
          <i class="icon ion-md-trash" style="padding-right: 10px;"></i>
          <label for="">Delete</label>
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
  data() {
    return {
      dragging: -1
    }
  },
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
    },
     dragStart(which, ev) {
      ev.dataTransfer.setData('Text', this.id);
      ev.dataTransfer.dropEffect = 'move'
      this.dragging = which;
    },
    dragEnd(ev) {
      this.dragging = -1
    },
    dragFinish(to, ev) {
      this.moveItem(this.dragging, to);
    },
    moveItem(from, to) {
      if (to === -1) {
        this.removeItemAt(from);
      } else {
        this.arraysCurrency.splice(to, 0, this.arraysCurrency.splice(from, 1)[0]);
      }
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
  margin-bottom: 16px;
  cursor: grab;
  &__content {
    width: 85%;
  }
  &__delete {
    display: flex;
    width: 15%;
    text-align: center;
    margin-top: 30px;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      color: #007bff;
    }
    label {
      cursor: pointer;
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


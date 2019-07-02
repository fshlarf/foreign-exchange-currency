<template>
  <div align="center" class="add-currency">
    <div class="add-currency__btn" @click="addNewFormatCurrency" v-if="!showInput">
      <i class="icon ion-md-add-circle-outline"></i>
      <span>Add New Currency</span>
    </div>
    <div class="add-currency__input" v-if="showInput">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Input new format currency" @keyup.enter="submitAddCurrency" v-model="newCurrency">
        <div class="input-group-append">
          <button class="btn btn-primary btn-add" type="button" @click="submitAddCurrency">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {},
  data() {
    return {
      showInput: false,
      newCurrency: ''
    }
  },
  methods: {
    ...mapActions({
      addNewCurrency: 'addNewCurrency'
    }),
    addNewFormatCurrency() {
      this.showInput = true
      this.newCurrency = ''
    },
    submitAddCurrency() {
      this.showInput = false
      this.addNewCurrency(this.newCurrency)
    }
  }
}
</script>

<style lang="scss" scoped>
.add-currency {
  padding-bottom: 16px;
  margin: 10px 50px;
  &__btn {
  padding: 16px;
  border-radius:10px;
  border: 1px solid white;
  color: white;
  background-color: #007bff;  
    i {
      font-size: 30px;
      vertical-align: sub;
    }
    span {
      font-size: 20px;
    }
    &:hover {
      border: 1px solid #007bff;
      color: #007bff;
      background-color: white;
    }
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
@media (max-width: 350px) {
  .add-currency {
    &__btn {
      padding: 6px;
      i {
        font-size: 20;
        vertical-align: inital;
      }
      span {
        font-size: 18px;
      }
    }
  }
}
@media (max-width: 800px) {
  .add-currency {
    &__btn {
      padding: 6px;
      i {
        font-size: 20px;
        vertical-align: initial;
      }
      span {
        font-size: 18px;
      }
    }
  }
}
</style>


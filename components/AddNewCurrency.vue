<template>
  <div align="center" class="add-currency">
    <div class="add-currency__btn" @click="addNewFormatCurrency" v-if="!showInput">
      <img src="~/assets/icons/ic-add.png"/>
      <span>Add New Currency</span>
    </div>
    <div class="add-currency__input" v-if="showInput">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Input new format currency" >
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" id="button-addon2" @click="submitAddCurrency">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      showInput: false
    }
  },
  methods: {
    addNewFormatCurrency() {
      this.showInput = true
    },
    submitAddCurrency() {
      this.showInput = false
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
  border: 1px solid #007bff;
  color: #007bff;
    img {
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
</style>


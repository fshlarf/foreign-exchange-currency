<template>
  <div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Invalid Input Currency</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>The currency you typed does not exist.</p>
        <button type="button" class="btn btn-secondary" style="float: right" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  display: block !important;
  background-color: rgba(0, 0, 0, 0.445);
  &-dialog {
    top: 15rem !important;
  }
}
</style>


<script>
export default {
  name: "popup",
  props: {
    is_show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hidePopup() {
      this.$emit("update:is_show", false)
    }
  }
}
</script>

<template>
<div class="popup"
     v-if="is_show"
     @click="hidePopup"
>
  <div class="popup__content"
    @click.stop
  >
    <slot></slot>
  </div>
</div>
</template>

<style scoped>
.popup {
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);

}

.popup__content {
  margin: auto;
  background: white;
  border-radius: 20px;
  padding: 16px;
}
</style>
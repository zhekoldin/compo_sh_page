<script>
export default {
  name: "DefaultButton"
}
</script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  cursor: pointer;
  padding: 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>
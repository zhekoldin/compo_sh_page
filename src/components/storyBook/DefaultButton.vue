<script>
import "/src/css/index.css"
export default {
  name: "DefaultButton",
  props: {
    button_text: String,
    state: String
  }
}
</script>

<template>
  <div class="button">
    <slot></slot>
    {{ button_text }}
  </div>
</template>

<style scoped>
.button {
  cursor: pointer;
  border-radius: 8px;
  padding: 16px 24px 16px 24px;
  background-color: var(--blue);
  color: var(--white);
  font-size: 14px;
  line-height: 16px;
}
</style>
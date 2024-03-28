<script>
import "/src/css/index.css"
export default {
  name: "DefaultButton",
  props: {
    class_list: Array
  },
  computed: {
    getCssClass() {
      const custom_class_str = this.class_list ? this.class_list.join(' ') : ""
      return `button ${custom_class_str}`
    }
  }
}
</script>

<template>
  <div :class="getCssClass">
    <slot></slot>
  </div>
</template>

<style>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  line-height: 16px;
  background-color: var(--blue);
  color: var(--white);

  .svg-icon {
    margin-right: 12px;
  }
}
</style>
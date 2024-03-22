<script>
export default {
  name: "DefaultInput",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value)
    }
  }
}
</script>

<template>
  <input
      :value="modelValue"
      @input="updateInput"
      class="input"
      type="text"
      placeholder="Название"
  >
</template>

<style scoped>
.input {
  border: 1px solid teal;
  padding: 10px 15px;
}
</style>
<script>
export default {
  name: "DefaultInput",
  props: {
    modelValue: [String, Number],
    placeholder: {
      type: String,
      required: true
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value.trim())
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
      :placeholder="placeholder"
  >
</template>

<style scoped>
.input {
  outline: none;
  border: none;
  height: 32px;
  color: var(--black);

}
</style>
<script>
export default {
  name: "DefaultSelect",
  props: {
    modelValue: {
      type: String
    },
    option_list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value)
    }
  }
}
</script>

<template>
<select v-model="modelValue" @change="changeOption">
  <option disabled value="">Выберите из списка</option>
  <option
      v-for="option in option_list"
      :key="option.value"
      :value="option.value"
  >
    {{ option.name}}
  </option>
</select>
</template>

<style scoped>

</style>
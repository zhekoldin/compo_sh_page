<script lang="ts">
export default {
  name: "DefaultIcon",
  props: {
    icon_id: String,
    icon_name: String,
    class_list: Array,
  },
  computed: {
    getIconId(): string {
      console.log(this)
      return this.icon_id ? `id="${this.icon_id}"` : ''
    },
    getIconClass(): string {
      return `svg-icon ${this.icon_name} ${this.getClassListStr()}`
    },
    getUseHref(): string {
      return `#${this.icon_name}`
    }
  },
  methods: {
    getClassListStr(): string {
      return this.class_list.join(' ') ?? ''
    }
  }
}
</script>

<template>
  <svg
      :id="getIconId"
      :class="getIconClass"
  >
    <use :href="getUseHref"></use>
  </svg>
</template>

<style scoped></style>
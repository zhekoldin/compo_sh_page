<script>
export default {
  name: "DefaultIcon",
  props: {
    size: Number,
    icon_name: String,
    icon_color: String
  },
  computed: {
    getSizePxStr() {
      return this.size + "px"
    },
    getViewBoxStr() {
      return `0 0 ${this.size} ${this.size}`
    }
  }
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="getSizePxStr"
       :height="getSizePxStr"
       :viewBox="getViewBoxStr"
       :aria-labelledby="icon_name"
       class="svg-icon"
  >
    <title
        :id="icon_name"
        lang="en"
    >{{icon_name}} icon</title>
    <g :fill="icon_color">
        <slot />
    </g>
  </svg>
</template>

<style scoped></style>
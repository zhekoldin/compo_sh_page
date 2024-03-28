<script lang="ts">
import DefaultIcon from "@/components/storyBook/DefaultIcon.vue";
import Icons from "@/icons/icons.js"

export default {
  name: "DefaultComplexIcon",
  data() {
    return {
      icon_symbol: null
    }
  },
  props: {
    icon_view_box: String,
  },
  mixins: [DefaultIcon],
  computed: {
    getIconViewBoxStr(): string {
      return this.icon_symbol.getAttribute('viewBox');
    }
  },
  mounted() {
    this.icon_symbol = document.querySelector(`#${Icons.selectors.svg_holder} #${this.icon_name}`);
  }
}
</script>

<template>
  <svg
      :id="getIconId"
      :class="getIconClass"
      :viewBox="this.getIconViewBoxStr"
  >
    {{ this.icon_symbol.innerHTML }}
  </svg>
</template>

<style scoped></style>
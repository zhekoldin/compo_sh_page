<template>
  <div class="app">
    <default-logo></default-logo>
    <default-button
        :button_text="Меню"
    >
      <DefaultIcon
          :icon_id="icon_id"
          :icon_name="icon_name"
          :class_list="class_list"
      >

      </DefaultIcon>
    </default-button>
    <profile></profile>
    <product></product>
    <company></company>
  </div>
</template>

<script>

import Profile from "@/components/main/profile/Profile.vue";
import Product from "@/components/main/product/Product.vue";
import Company from "@/components/main/company/Company.vue";
import DefaultIcon from "@/components/storyBook/DefaultIcon.vue";

export default {
  components: {DefaultIcon, Company, Product, Profile},
  data() {
    return {
      icon_id: "path_icon_id",
      icon_name: "icon_name",
      class_list: ["class_1", "class_2"]
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

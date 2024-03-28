<template>
  <div class="app">
    <default-logo></default-logo>
    <default-button>
      <DefaultIcon
          :size="icon_size"
          :icon_name="icon_name"
          :icon_color="icon_color"
      >
        <IconBasket></IconBasket>
      </DefaultIcon>
      Корзина
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
import IconBasket from "@/components/icons/IconBasket.vue";

export default {
  components: {IconBasket, DefaultIcon, Company, Product, Profile},
  data() {
    return {
      icon_name: "basket",
      icon_color: "#ffffff",
      icon_size: 24
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

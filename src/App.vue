<template>
  <div class="app">
    <profile></profile>
    <product></product>
    <company></company>
  </div>
</template>

<script>

import Profile from "@/components/main/profile/Profile.vue";
import Product from "@/components/main/product/Product.vue";
import Company from "@/components/main/company/Company.vue";

export default {
  components: {Company, Product, Profile},
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

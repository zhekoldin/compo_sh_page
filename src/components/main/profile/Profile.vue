<script>
import ProfileTop from "@/components/main/profile/ProfileTop.vue";
import ProfileBottom from "@/components/main/profile/ProfileBottom.vue";

export default {
  name: "Profile",
  components: {
    ProfileBottom,
    ProfileTop

  }
}
</script>

<template>
  <profile-top></profile-top>
  <profile-bottom></profile-bottom>
</template>

<style scoped>

</style>
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
  <div class="profile">
    <profile-top></profile-top>
    <profile-bottom></profile-bottom>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 24px;
}
</style>
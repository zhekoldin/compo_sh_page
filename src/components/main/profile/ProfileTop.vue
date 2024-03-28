<script>

import ProfileInput from "@/components/main/profile/ProfileInput.vue";

export default {
  name: "ProfileTop",
  components: {ProfileInput},
  data() {
    return {
      button_menu_list: {
        icon_name: "basket",
        icon_color: "#ffffff",
        icon_size: 24
      },
    }
  }
}
</script>

<template>
  <div class="profile-top">
    <default-logo class="profile-top__item"></default-logo>
    <default-button class="profile-top__item">
      <DefaultIcon
          :size="button_menu_list.icon_size"
          :icon_name="button_menu_list.icon_name"
          :icon_color="button_menu_list.icon_color"
      >
        <IconList></IconList>
      </DefaultIcon>
      Меню
    </default-button>
    <profile-input class="profile-top__item"></profile-input>
  </div>
</template>

<style scoped>
.profile-top {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.profile-top__item {
  margin-right: 24px;
}
</style>
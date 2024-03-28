<script>

export default {
  name: "ProfileInput",
  data() {
    return {
      placeholder: "Название запроса",
      icon_size: 24,
      icon_name_list: {
        cross: "cross",
        magnify: "magnify"
      },
      icon_color: "#050D23"
    }
  }
}
</script>

<template>
  <div class="profile-input">
    <default-input
        class="profile-input__input"
        :placeholder="placeholder"
    >
    </default-input>
    <default-icon
        class="profile-input__icon"
        :size="icon_size"
        :icon_name="icon_name_list.cross"
        :icon_color="icon_color"
    ></default-icon>
    <default-icon
        class="profile-input__icon"
        :size="icon_size"
        :icon_name="icon_name_list.magnify"
        :icon_color="icon_color"
    ></default-icon>
  </div>
</template>

<style scoped>
.profile-input {
  display: flex;
  border: 1px solid var(--gray-light);
  border-radius: 8px;
  padding: 8px 16px;
}

.profile-input__input {
  margin-right: 12px;
  border-radius: 8px;
}

.profile-input__icon {
  margin-right: 12px;
}
</style>
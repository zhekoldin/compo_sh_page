<template>
  <form
      @submit.prevent
      class="form"
  >
    <div class="form__title">Данные для нового поста:</div>
    <default-input
        class="form__input"
        v-model="post.title"
    ></default-input>
    <default-input
        class="form__input"
        v-model="post.body"
    ></default-input>
    <default-button
        class="form__button"
        @click="createPost"
    >
      Создать
    </default-button>
  </form>
</template>

<script>
import DefaultInput from "@/components/storyBook/DefaultInput.vue";

export default {
  components: {DefaultInput},
  data() {
    return {
      post: {
        title: "",
        body: ""
      }
    }
  },
  methods: {
    createPost() {
      this.post = {
        id: Date.now(),
        title: this.post.title,
        body: this.post.body
      }
      this.$emit("create_post", this.post)
      this.post = {
        id: 1,
        title: "",
        body: "",
      }
    },
  },
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form__title {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 10px;
}

.form__button {
  align-self: flex-end;
}

.form__input {

  margin-bottom: 10px;
}

</style>
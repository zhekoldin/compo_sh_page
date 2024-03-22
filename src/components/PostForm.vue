<script>
export default {
  data() {
    return {
      post: {
        title: "",
        description: ""
      }
    }
  },
  methods: {
    createPost() {
      this.post = {
        id: Date.now(),
        title: this.post.title,
        description: this.post.description
      }
      this.$emit("create_post", this.post)
      this.post = {
        id: 1,
        title: "",
        description: "",
      }
    },
  }
}
</script>

<template>
  <form @submit.prevent>
    <h4>Данные для нового поста:</h4>
    <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Название"
    >
    <input
        v-model="post.description"
        class="input"
        type="text"
        placeholder="Описание"
    >
    <button class="button"
            @click="createPost"
    >
      Создать
    </button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

h4 {
  margin-bottom: 10px;
}

.input {
  border: 1px solid teal;
  padding: 10px 15px;
  margin-bottom: 10px;
}

.button {
  cursor: pointer;
  align-self: flex-end;
  padding: 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>
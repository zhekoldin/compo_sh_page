<template>
  <div class="post" v-for="post in posts" :key="post.id">
    <div class="post__info">
      <div><strong>Название: </strong>{{ post.title}}</div>
      <div><strong>Описание: </strong>{{post.description}}</div>
    </div>
    <div class="post__buttons">
      <button
          class="button post__button"
          @click="() => deletePost(post.id)"
      >
        удалить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    }
  },
  methods: {
    deletePost(id) {
      this.$emit("delete_post", id)
    }
  }
}
</script>

<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border: 2px solid teal;
  margin-bottom: 15px;
}

.post__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.post__buttons {
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
}

.post__button {
  border: 1px solid teal;
}
</style>
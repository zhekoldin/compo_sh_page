<template>
  <div class="post">
    <div class="post__info">
      <div><strong>Название: </strong>{{ post.title}}</div>
      <div><strong>Описание: </strong>{{post.description}}</div>
    </div>
    <div class="post__buttons">
      <default-button
          class="post__button"
          @click="() => deletePost(post.id)"
      >
        Удалить
      </default-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
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
  border: 1px solid teal;
  margin-bottom: 15px;
}

.post__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #12252b;
}

.post__buttons {
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
}

.post__button {
  align-self: flex-end;
}
</style>
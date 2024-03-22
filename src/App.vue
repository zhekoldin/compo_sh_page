<template>
  <div class="app">
    <form>
      <h4>Данные для нового поста:</h4>
      <input
          v-bind:value="title"
          @input="onInputTitle"
          class="input" type="text"
          placeholder="Название"
      >
      <input
          v-bind:value="description"
          @input="onInputDescription"
          class="input"
          type="text"
          placeholder="Описание"
      >
      <button class="button">Создать</button>
    </form>
    <div class="post" v-for="post in posts" :key="post.id">
      <div><strong>Название: </strong>{{ post.title}}</div>
      <div><strong>Описание: </strong>{{post.description}}</div>
    </div>
    <div>Кол-во лайков <strong>{{ likes }}</strong></div>
    <div>Кол-во дизлаков <strong>{{ dislikes }}</strong></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      posts: [
        {id: 1, title: "post 1", description: "description 1"},
        {id: 2, title: "post 2", description: "description 2"},
        {id: 3, title: "post 3", description: "description 3"},
      ]
    }
  },
  methods: {
    onInputTitle(event) {
      console.log(event)
      this.title = event.target.value
    },
    onInputDescription(event) {
      this.description = event.target.value
    },
    createPost() {

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

form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

h4 {
  margin-bottom: 10px;
}

.app {
  padding: 20px;
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-bottom: 15px;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-bottom: 10px;
}

.button {
  cursor: pointer;
  align-self: flex-end;
  margin-top: 10px;
  padding: 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>

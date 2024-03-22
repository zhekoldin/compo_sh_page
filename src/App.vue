<template>
  <div class="app">
    <popup
        v-model:is_show="is_show_create_post_popup"
    >
      <post-form
          @create_post="createPost"
      />
    </popup>
    <h1>Страница с постами</h1>
    <default-button
        @click="showCreatePostPopup"
        style="margin: 15px 0"
    >
      Создать пост
    </default-button>
    <default-button
        @click="fetchPostList"
        style="margin: 15px"
    >
      Создать пост
    </default-button>
    <post-list
        :post_list="post_list"
        @delete_post="deletePost"
    />
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import axios from "axios"
export default {
  components: {PostList, PostForm},
  data() {
    return {
      is_show_create_post_popup: false
    }
  },
  methods: {
    createPost(post) {
      this.post_list.push(post)
      this.is_show_create_post_popup = false
    },
    deletePost(id) {
      const index = this.post_list.findIndex(post => post.id === id)
      this.post_list.splice(index, 1)
      console.log(this.post_list.length)
    },
    showCreatePostPopup() {
      this.is_show_create_post_popup = true
    },
    async fetchPostList() {
      try {
        const response =
            await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
        console.log(response)
      } catch (e) {
        console.error(e)
      }
    }
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>

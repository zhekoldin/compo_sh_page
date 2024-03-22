<template>
  <div class="app">
    <post-form
        @create_post="createPost"
    />
    <post-list
        :post_list="post_list"
        @delete_post="deletePost"
    />
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
export default {
  components: {PostList, PostForm},
  data() {
    return {
      post_list: [
        {id: 1, title: "post 1", description: "description 1"},
      ]
    }
  },
  methods: {
    createPost(post) {
      this.post_list.push(post)
    },
    deletePost(id) {
      const index = this.post_list.findIndex(post => post.id === id)
      this.post_list.splice(index, 1)
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

.app {
  padding: 20px;
}
</style>

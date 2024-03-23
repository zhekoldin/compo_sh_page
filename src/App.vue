<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <div class="app__buttons">
      <default-button
          @click="showCreatePostPopup"
      >
        Создать пост
      </default-button>
      <default-select
          v-model="selectedSort"
          :option_list="sort_list"
      >

      </default-select>
    </div>
    <popup
        v-model:is_show="is_show_create_post_popup"
    >
      <post-form
          @create_post="createPost"
      />
    </popup>
    <post-list
        v-if="!is_start_loading"
        :post_list="getSortedPostList"
        @delete_post="deletePost"
    />
    <div v-else>Идет загрузка ...</div>
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
      is_show_create_post_popup: false,
      post_list: [],
      is_start_loading: false,
      selectedSort: "",
      sort_list: [
        {value: "title", name:"По названию"},
        {value: "body", name:"По описанию"},
        {value: "id", name:"По времени создания"},
      ]
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
    },
    showCreatePostPopup() {
      this.is_show_create_post_popup = true
    },
    async fetchPostList() {
      try {
        this.is_start_loading = true
        setTimeout(async () => {
          const response =
              await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
          this.post_list = response.data
        }, 1000)

      } catch (e) {
        console.error(e)
      } finally {
        this.is_start_loading = false
      }
    }
  },
  mounted() {
    this.fetchPostList()
  },
  computed: {
    getSortedPostList() {
      return [...this.post_list].sort((post_1, post_2) => {
        return post_1[this.selectedSort]?.localeCompare(post_2[this.selectedSort])
      })
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

.app__buttons {
  display: flex;
  justify-content: space-between;
  margin: 15px 0
}
</style>

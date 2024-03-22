<template>
  <div v-if="post_list.length > 0">
    <post-item
        v-for="post in post_list"
        :key="post.id"
        :post="post"
        @delete_post="deletePost"
    />
  </div>
  <div v-else>
    <h2>Список постов пустой</h2>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components: {PostItem},
  props: {
    post_list: {
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

</style>
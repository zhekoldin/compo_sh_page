<template>
  <div v-if="post_list.length > 0">
    <transition-group name="post-list"><post-item
        v-for="post in post_list"
        :key="post.id"
        :post="post"
        @delete_post="deletePost"
    /></transition-group>
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
.post-list-move, /* apply transition to moving elements */
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>
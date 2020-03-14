<template>
  <div>
    <div v-for="blog in blogPosts" :key="blog.title">
      {{ blog.title }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
  },
};
</script>


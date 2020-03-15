<template>
  <div class="container min-h-screen flex-row justify-center align-middle m-0 p-4 min-w-full sm:p-8 md:p-12 md:flex">
      <div class=" flex justify-between content-center md:w-1/3 md:flex-row flex-wrap md:p-8">
        <h1 class=" text-gray-900 font-extrabold tracking-wider mt-2 uppercase text-lg sm:text-2xl md:text-4xl leading-none">Hello World</h1>
        <a href="/blog" class=" text-xs uppercase tracking-widest font-bold px-4 py-1 mt-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600 sm:px-6 sm:py-2 self-center md:mt-4">Blog</a>
      </div>
      <div class=" md:w-2/3 mt-4"> 
        <img src="~/static/img/zern.jpeg" alt="zern portfolio" class=" shadow-lg mt-2 rounded-lg object-cover">
        <h3 class=" text-gray-700 mt-4 text-xs md:text-lg">First ever blog about Web Development, Data Science and more!</h3> 
      </div>
    </div>
</template>

<script>

export default {
  components: {
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>

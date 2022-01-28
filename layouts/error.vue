<template>
  <div
    class="container flex flex-col items-center justify-center h-full mt-20 text-white "
  >
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
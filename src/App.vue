<template>
  <div class="app">
    <blog_header />
    <top_img />
    <login_box />
    <test01 />
  </div>
</template>

<script lang="ts">
import blog_header from './components/blog_header.vue'
import top_img from './components/top_img.vue'
import login_box from './components/login_box.vue'
import test01 from './components/test01.vue'

export default {
  name: 'App',
  components: { blog_header, top_img, login_box, test01 },
}
</script>

<style>
html,
body #app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>

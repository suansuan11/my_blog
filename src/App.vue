<template>
  <div class="app">
    <blog-header />
    <top-img />
    <login-box />
    <test01 />
  </div>
</template>

<script lang="ts">
import blogHeader from '@/components/blog-header.vue'
import topImg from '@/components/top-img.vue'
import loginBox from '@/components/login-box.vue'
import test01 from '@/components/test01.vue'

export default {
  name: 'App',
  components: { blogHeader, topImg, loginBox, test01 },
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

<template>
  <div class="app">
    <!-- 导航区 -->
    <nav-bar />
    <!-- 展示区 -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import { router } from '@/router'

router.replace('/welcome')
</script>

<style>
html,
body #app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
/* 全局背景图片 */
body {
  background-image: url('assets/top_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<template>
  <div id="blog_header">
    <!-- 这是什么? -->
    <div id="icon">
      <h1><a href="/home" id="self_href">涩</a></h1>
    </div>

    <nav id="nav_bar">
      <ul>
        <li>
          <router-link to="/home" active-class="">首页</router-link>
          <router-link to="/photos" active-class="">相片</router-link>
          <router-link to="/about" active-class="">关于</router-link>
        </li>
      </ul>
    </nav>

    <div id="about_me">
      <button type="button" id="login_btn" @click="handelLogin">登录</button>
      <img src="../assets/my_img.png" alt="我" id="circle_img" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { router } from '@/router'

const handelLogin = () => {
  router.push('/login')
}
</script>

<style>
#blog_header {
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: rgba(50, 215, 223, 0.851);
  box-shadow: 0 0 20px rgb(29, 58, 59);
}

#icon {
  display: flex;
  align-items: center;
  width: 20%;
  height: 50px;
  text-align: start;
}
#icon a {
  position: relative;
  left: 20px;
  color: #666;
  text-decoration: none;
}

#nav_bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60%;
  text-align: center;
}
#nav_bar a {
  padding: 20px;
  margin: 10px;
  font-weight: bolder;
  color: #666666;
  text-decoration: none;
}
#nav_bar ul,
li {
  list-style: none;
}

#about_me {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 50px;
  text-align: end;
}
#circle_img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 100%;
}

#login_btn {
  width: 50px;
  margin-right: 20px;
  margin-left: 50px;
  background-color: rgb(0, 0, 0, 0);
  border: none;
  border-radius: 5px;
}
#login_btn:hover {
  background-color: rgba(10, 118, 176, 0.845);
  border: 1px solid rgb(111, 111, 111);
}
</style>

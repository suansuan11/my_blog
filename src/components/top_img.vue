<template>
  <div id="top_img">
    <div id="myname">
      <h1>Diiiiooo</h1>
    </div>
    <div id="saying">
      <h3>“I Wish You Were Gay.”</h3>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#top_img {
  height: 100vh;
  width: 100vw;
  background-image: url(../assets/top_bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#myname h1 {
  font-size: 60px;
  background: linear-gradient(to right, rgba(222, 147, 6, 0.814), rgb(0, 0, 0, 0.795));
  background-clip: text;
  color: transparent;
  border-radius: 5px;
}
#myname h1:hover {
  background: linear-gradient(to left, rgba(222, 147, 6, 0.814), rgba(0, 0, 0, 0.795));
  background-clip: text;
  color: transparent;
}
#saying {
  height: 30px;
  padding: 10px;
  background-color: rgba(75, 76, 74, 0.399);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#saying h3 {
  color: white;
}
</style>

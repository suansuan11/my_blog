<template>
  <div class="w-100vw h-100vh center">
    <div id="login_box center w-200 h-200">
      <h2>Login</h2>
      <form action="./blog_header.vue" method="post" name="login">
        <div class="input_box">
          <label for="username">账号：</label>
          <input type="text" id="username" name="username" autocomplete="username" />
        </div>
        <div class="input_box">
          <label for="password">密码：</label>
          <input type="password" id="password" name="password" autocomplete="current-password" />
        </div>
        <div class="btn_box">
          <a href="./blog_header.vue" target="_blank">忘记密码？</a>
          <div>
            <button type="submit">登录</button>
            <button type="reset">注册</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup name="login_box" lang="ts"></script>

<style>
.new_login_box {
  position: fixed;
  top: 30%;
  left: 40%;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 380px;
  background-color: rgb(50, 50, 50, 0.1);
  backdrop-filter: blur(10px);
  border: 1px seashell solid;
  border-radius: 20px;
}
#login_box {
  display: none;
}
#login_box > h2 {
  margin-bottom: 30px;
  font-size: 38px;
  color: rgb(182, 118, 68);
}
#login_box .input_box {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
#login_box .input_box > label {
  margin-bottom: 5px;
  font-weight: bolder;
  color: rgb(147, 58, 58);
}
#login_box .input_box > input {
  width: 230px;
  height: 24px;
  padding: 0px 10px;
  margin-bottom: 5px;
  color: rgb(56, 42, 137);
  letter-spacing: 1px;
  background-color: rgb(255, 255, 255, 0.3);
  border: 1px solid rgb(255, 255, 255, 0.5);
  border-radius: 5px;
  outline: none;
  transition: 0.2s;
}
#login_box .input_box > input:focus {
  border: 1px solid rgb(0, 0, 0, 0.8);
}

#login_box .btn_box {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 230px;
}

.btn_box > a {
  width: 90px;
  margin-bottom: 10px;
  margin-left: 150px;
  color: white;
  text-align: end;
  text-decoration: none;
  transition: 0.2s;
}
.btn_box > a:hover {
  color: black;
}

.btn_box > div > button {
  width: 100px;
  height: 30px;
  background-color: rgb(212, 194, 159, 0.5);
  border: 1px solid rgb(212, 194, 159, 0.8);
  border-radius: 5px;
  transition: 0.2s;
}
.btn_box > div > button:nth-of-type(2) {
  margin-left: 20px;
}
.btn_box > div > button:hover {
  color: aliceblue;
  background-color: rgba(58, 47, 25, 0.5);
  border-radius: 5px;
}
</style>

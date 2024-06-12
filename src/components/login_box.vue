<template>
    <div id="login_box">
        <h2>Login</h2>
        <form action="./blog_header.vue" method="post" name="login">
            <div class="input_box">
            <label for="username">账号：</label>
            <input type="text" id="username" name="username" autocomplete="username">
            </div>
            <div class="input_box">
                <label for="password">密码：</label>
                <input type="password" id="password" name="password" autocomplete="current-password">
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
</template>

<script setup name="login_box" lang="ts">

</script>


<style>
    .new_login_box{
        display: flex!important;
        position: fixed;
        top: 30%;
        left: 40%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 380px;
        width: 350px;
        border: 1px seashell solid;
        border-radius: 20px;
        backdrop-filter: blur(10px);
        background-color: rgb(50, 50, 50, 0.1);
    }
    #login_box{
        display: none;
    }
    #login_box > h2{
        color:rgb(182,118,68);
        font-size: 38px;
        margin-bottom: 30px;
    }
    #login_box .input_box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
    }
    #login_box .input_box > label{
        color: rgb(147, 58, 58);
        font-weight: bolder;
        margin-bottom: 5px;
    }
    #login_box .input_box > input{
        margin-bottom: 5px;
        height: 24px;
        width: 230px;
        color: rgb(56, 42, 137);
        background-color: rgb(255, 255, 255, 0.3);
        border: 1px solid rgb(255, 255, 255, 0.5);
        border-radius: 5px;
        outline: none;
        transition: 0.2s;
        padding: 0px 10px;
        letter-spacing: 1px;
    }
    #login_box .input_box > input:focus{
        border: 1px solid rgb(0, 0, 0, 0.8);
    }

    #login_box .btn_box{
        width: 230px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
    }

    .btn_box > a{
        text-decoration: none;
        color: white;
        transition: 0.2s;
        width: 90px;
        margin-left: 150px;
        margin-bottom: 10px;
        text-align: end;
    }
    .btn_box > a:hover{
        color: black;
    }

    .btn_box > div > button{
        width: 100px;
        height: 30px;
        border: 1px solid rgb(212,194,159,0.8);
        background-color: rgb(212,194,159,0.5);
        border-radius: 5px;
        transition: 0.2s;
    }
    .btn_box > div > button:nth-of-type(2){
        margin-left: 20px;
    }
    .btn_box > div > button:hover{
        color: aliceblue;
        background-color: rgba(58, 47, 25, 0.5);
        border-radius: 5px;
    }
</style>
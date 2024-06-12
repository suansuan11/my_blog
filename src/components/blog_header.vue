<template>
    <div id="blog_header">
        <div id="icon">
            <h1><a href="./index.html" id="self_href">涩</a></h1>
        </div>
        <nav id="nav_bar">
            <ul>
                <li>
                    <a href="./index.html">首页</a>
                    <a href="">相片</a>
                    <a href="">关于</a>
                </li>
            </ul>
        </nav>
        
        <div id="about_me">
            <button type="button" id="login_btn">登录</button>
            <a href="./index.html"><img src="../assets/my_img.png" alt="我" id="circle_img"></a>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';

    function login_out()
    {
        const btn = document.getElementById('login_btn')
        console.log(btn)
        const box = document.getElementById('login_box')
        console.log(box);
        if (btn && box) {
            btn.addEventListener('click', function() {
            box.classList.toggle('new_login_box');
            });
        } else {
            console.error('Button or Box not found');
        }
    }
    onMounted(() => {
        login_out();
    });
</script>

<style>
    #blog_header{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 50px;
        background-color: rgba(50, 215, 223, 0.851);
        box-shadow: 0 0 20px rgb(29, 58, 59) ;
    } 

    #icon{
        width: 20%;
        height: 50px;
        display: flex;
        align-items: center;
        text-align: start;
    }
    #icon a{
        position: relative;
        left: 20px;
        text-decoration: none;
        color: #666;
    }

    #nav_bar{
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 60%;
    }
    #nav_bar a{
        padding: 20px;  
        margin: 10px;
        color: #666666;
        text-decoration: none;
        font-weight: bolder;
    }   
    #nav_bar ul,li{
        list-style: none;
    }

    #about_me{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 50px;
        text-align: end;
    }
    #circle_img{
        width: 40px;
        height: 40px;
        border-radius: 100%;
        object-fit: cover;
    }

    #login_btn{
        margin-left: 50px;
        margin-right: 20px;
        background-color: rgb(0, 0, 0, 0);
        width: 50px;
        border: none;
        border-radius: 5px;
    }
    #login_btn:hover{
        background-color: rgba(10, 118, 176, 0.845);
        border: 1px solid rgb(111,111,111);
    }
</style>
<template>
    <div>
        <h1>登录/注册</h1>
        <div class="login-icon">
            <img src="../assets/app/icon/applogo.png" />
        </div>
        <ul class="room" >
            <li>
                <p>手机号</p>
                <input v-model="phone_number">
            </li>
            <li>
                <p>密码</p>
                <input type="password" v-model="password_number">
            </li>
        </ul>
        <div class="login">
            <button @click="onsubmit">登录</button>
            <p>点我注册</p>
        </div>

<!--        <p>VN+盖伦+女坦+剑姬+奥巴马+德莱文+千珏，</p>-->
<!--        <p>德莱文+剑姬+慎+剑魔+船长+亚索(剑士)蕾欧娜+布隆(守护者)可选：诺手或斯维因(帝国)</p>-->
<!--        <p>薇恩+艾希+维鲁斯+千珏(游侠)猪女+狗熊(冰川)布隆+蕾欧娜(守护者)</p>-->
    </div>
</template>

<script>
    export default {
        name: "appindex",
        data(){
            return{
                login:{
                    phone_number:'',
                    password_number:''
                }
            }
        },
        methods:{
            onsubmit(){
                let para={
                    phone:this.phone_number,
                    password:this.password_number
                }
                console.log(para)
                this.$router.push({path:'/apphome'})
            }

        }
    }
</script>
<style scoped lang="scss">
    h1{
        text-align: center;
        padding: .4rem;
        color: #292930;
    }
    .login-icon{
        padding: 0rem !important;
        img{
            width: 1.5rem;
            height: 1.5rem;
            margin: auto;
        }
    }
.room {

    padding:0.2rem .4rem;
        li{
            margin:.4rem auto;
            height: 1rem;
            display: flex;
            p{
                overflow: hidden;
                width: 20%;
                line-height: 1rem;
                vertical-align: middle;
                text-align: center;
                font-size: .3rem;
                color: #787882;
                border-top-left-radius:.1rem;
                border-bottom-left-radius: .1rem;
                background: linear-gradient(to bottom right, #ffec4e , #ffce30);

            }
                input{
                    border-top:2px solid white;
                    font-size: .36rem;
                    width: 80%;
                    vertical-align: middle;
                    height: 1rem;
                    border:0px;
                    outline: none;
                    padding-left: .3rem;
                }
            }
    }
    .login{
        padding: .4rem;
        button{
            width: 100%;
            height: 1rem;
            border:0px;
            outline: none;
            border-radius: .1rem;
            font-size: .4rem;
            font-weight: bold;
            color: #4d4d56;
            background-color: #ffda22;
            text-align: center;
        }
        p{
            text-align: right;
            padding:.2rem;
            color: #787882;
        }
    }
</style>

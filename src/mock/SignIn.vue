<template>
    <div class="fater">
        <div class="child">
            <ul>
                <li><table>账号</table><input v-model="AccountNumber"></li>
                <li><table>密码</table><input v-model="Password"></li>
                <button @click="AdminSignInBtn">AdminSignIn</button>
                <div>{{Result}}</div>
            </ul>
        </div>
    </div>
</template>

<script>
    import {AdminSignIn} from "@/request/api"
    export default {
        name: "SignIn",
        data(){
            return{
                AccountNumber:'',
                Password:'',
                Result:''
            }
        },
        methods:{
            // 登陆
            AdminSignInBtn(){
                let para={
                    username:this.AccountNumber,
                    userpassword:this.Password
                }
                AdminSignIn(para).then(res=>{
                    this.Result=res.msg
                }).catch(err=>{

                })
            }

        }
    }
</script>
<style scoped lang="scss">
.fater{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: paleturquoise;
}
    .child{
        width: 500px;
        height: 500px;
        margin:auto;
        background-color:burlywood;
        position: relative;
        top: 50%;
        transform: translate(0,-50%);
        padding: 20px;
        border-radius: 10px;
        color: white;
    }
</style>

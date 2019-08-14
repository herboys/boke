<template>
    <div class="fater">
        <div class="child">
            <ul>
                <li><p>繁华落尽</p></li>
                <li><label>账号</label><input v-model="AccountNumber"></li>
                <li><label>密码</label><input type="password" v-model="Password"></li>
                <li><button ref="from" @click="AdminSignInBtn">Sign in</button></li>
                <li><span>忘记密码</span> <span @click="avatarbtn">马上注册</span></li>
                <div>{{Result}}</div>
            </ul>
        </div>
    </div>
</template>

<script>
    import {AdminSignIn,BolgLogin,uploadavatar} from "@/request/api"
    export default {
        name: "SignIn",
        data(){
            return{
                AccountNumber:'',
                Password:'',
                Result:'',
                avatar:'',
                list:[{
                    name:111
                },{
                    name:222
                },{name:333}]
            }
        },
        methods:{
            avatarbtn(){
                async function aa(){
                    let first = await function bb() {
                        return new Promise((resolve,reject)=>{
                            let mun=14
                            if(mun===1){
                                setTimeout(()=>{
                                    resolve('2222')
                                },2000)
                            }else {
                                reject('执行失败了')
                            }
                        })
                    }()
                    return first
                }
                aa().then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
                console.log('我先执行了')
            },
            // 登陆
            AdminSignInBtn(){
                this.$refs.from.style.backgroundColor = "#f5f5f5";
                let para={
                    username:this.AccountNumber,
                    userpassword:this.Password
                }
                BolgLogin(para).then(res=>{
                    this.Result=res.msg
                    switch (this.Result) {
                        case "登录成功":
                            this.$router.push({path:"/updataimg"})
                            break
                    }
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
        ul{
            padding:10px 40px 40px 40px;
            li{
                width: 100%;
                overflow: hidden;
                display: flex;
                justify-content: space-between;
                padding-bottom: 40px;
                p{
                    width: 100%;
                    font-weight: bold;
                    font-size: 36px;
                    text-align: center;
                }
                label{
                    height: 40px;
                    font-size: 26px;
                    font-weight: bold;
                    width: 70px;
                    color: papayawhip;
                }
                input{
                    width: 100%;
                    height: 40px;
                    border:0px;
                    outline: none;
                    font-size: 26px;
                    background-color:burlywood ;
                    border-bottom: 1px solid rosybrown;
                    color: white;
                }
                button{
                    width: 100%;
                    height: 70px;
                    border: 0px;
                    border-radius: 10px;
                    background-color: darkorange;
                    outline: none;
                    color: burlywood;
                    font-size: 30px;
                    font-weight: bold;
                }
            }
        }

    }
</style>

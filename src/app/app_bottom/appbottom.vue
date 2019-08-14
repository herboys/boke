<template>
    <div>
        <div class="main">
            <ul>
                <li v-for="item in list" @click="gorouter(item)">
                    <div>
                        <img :src="item.list_img"  />
                        <span>{{item.name}}</span>
                    </div>

                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        name: "appbottom",
        data(){
            return{
                list:[
                    {
                    name:'消息',
                    list_img:require('../../assets/banner/banner1.jpg'),
                    list_router:'/app_bottom/appnews'
                },{
                    name:'联系人',
                    list_img:require('../../assets/banner/banner1.jpg'),
                        list_router:'/app_bottom/appContacts'
                },{
                    name:'看点',
                    list_img:require('../../assets/banner/banner1.jpg'),
                        list_router:'/app_bottom/appSpot'
                },{
                    name:'动态',
                    list_img:require('../../assets/banner/banner1.jpg'),
                        list_router:'/app_bottom/appdynamic'
                },

                ]
            }
        },
        methods:{
            gorouter(item){
                console.log(item)
                this.$router.push({path:item.list_router})
            }
        }
    }
</script>

<style scoped lang="scss">
.main{
    width: 100vw;
    text-align: center;
    height: 1.3rem;
    background-color: #eeeeee;
    ul{
        width: 100%;
        li{
            width: 25%;
            display: inline-block;
            div{
                height: 1.3rem;
                padding: .2rem;
                img{
                    width: .5rem;
                    height: .5rem;
                    margin: 0rem auto .1rem auto;
                    border-radius: 50%;
                }
                span{
                    margin-top: .1rem;
                    font-size: .3rem;
                    color: #292930;

                }
            }
        }
    }
}
</style>

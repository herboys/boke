<template>
    <div class="pages" data-touchmove-con>
        <div class="headers">
            <ul>
                <li>
                    <a>
                        <img src="../../assets/banner/banner1.jpg">
                    </a>
                </li>
                <li>
                    <p>消息</p>
                </li>
                <li>
                    <p style="text-align: right">+</p>
                </li>


            </ul>
        </div>
        <div class="title">
            <div><span>搜索</span></div>
        </div>
        <div class="shopping_page" >
            <div>
                <ul>
                    <li v-for="(item,index) in itemlist" ref="touchmove" v-leftMove="{container: '[data-touchmove-con]'}">
                        <div class="item_box bd_bottom">
                            <span>型号：</span>
                            <span>{{item.productionNmae}}</span>
                        </div>
                        <div class="delete_item" @click="deleteItem(index)">addShort</div>
                    </li>
                    <button @click="addShort">addShort</button>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "appnews",
        data(){
            return{
                itemlist:[
                    {
                        productionNmae: 'iPhone X'
                    }
                ]
            }
        },
         methods:{
        //     添加一条数据
             addShort () {
                 var addObj = {productionNmae: '商品' + this.itemlist.length}
                 this.itemlist.push(addObj)
             },
             // 删除一条数据‘
             deleteItem(ind){
                 console.log(this.$refs['touchmove'][ind])
                 this.itemlist.splice(ind, 1)
             }
         }
    }
</script>

<style scoped lang="scss">
    .pages{
        width: 100vw;
        height: 100vh;
        .headers{
            width: 100%;
            height: 1rem;
            background-color: #ffda20;
            ul{
                display: flex;
                align-items: center;
                padding:0rem .4rem;
                li{
                    flex: 1;
                    width: 100%;
                    display: flex;
                        a{
                            padding: .1rem 0rem;
                            width: .8rem ;
                            height: .8rem;
                            vertical-align: middle;
                            img{
                                width: .8rem ;
                                height: .8rem;
                                border-radius: 50%;
                            }
                        }
                    p{
                        width: 100%;
                        text-align: center;
                    }
                    }


            }
        }
    }
    .title{
        height: .8rem;
        padding:.2rem .4rem;
        margin: auto;
        div{
            height: 100%;
            background-color: white;
            border-radius: .5rem;
            span{
                display: block;
                width: 2rem;
                line-height: .8rem;
                vertical-align: middle;
                text-align: center;
                width: 1rem;
                margin: auto;
                color: #4d4d56;

                font-size: .3rem;
            }
        }
    }
    .shopping_page{
        overflow: hidden;
        background: #f5f5f5;
        div{
            margin-bottom: 10px;
            background: white;
            .item_box {
                display: flex;
                margin: 0 15px;
                justify-content: space-between;
                line-height: 50px;
            }
            .delete_item {
                position: absolute;
                top: 0;
                right: -60px;
                width: 60px;
                height: 100%;
                line-height: 100px;
                font-family: PingFangSC-Regular;
                font-size: 16px;
                text-align: center;
                color: white;
                background: #FF7EA9;
            }
            .bd_bottom {
                border-bottom: .5px solid #e8e8e8;
            }
        }

    }


</style>

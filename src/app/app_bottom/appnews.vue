<template>
    <div class="pages">
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
    </div>
</template>

<script>
    export default {
        name: "appnews"
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

</style>

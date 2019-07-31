<template>
    <div>
        <div class="page">
            <div class="Advertisement">
                <!--            <img src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" />-->
            </div>
            <div class="search">
                <div>
                    <input placeholder="输入点什么..." >
                    <button>搜一搜</button>
                </div>
            </div>
        </div>
        <div class="recommend-line"><a>模块区域</a></div>
        <div class="recommend-room">
            <div>
                <div>模块1</div>
                <div>模块2</div>
                <div>模块3</div>
            </div>

        </div>
        <div class="comment">
            <div class="comment-line">
                <a>新闻</a>
                <a>新闻</a>
                <a>新闻</a>
            </div>
            <div class="comment-room">
我是新闻
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "dome"
    }
</script>

<style scoped>
    .page{
        background-image: url("//hbfile.huabanimg.com/img/home/banner/21710cb208124b3a2f298675cb157de0ddf15b1c3acb73"); opacity: 1; background-position: center 0px;
    }
.Advertisement{
    width: 100%;
    height: 90px;
    overflow: hidden;

}
    .Advertisement>img{
        width: 100%;
        height: auto;
    }
    .search{
        width: 100%;
        height: 90px;
        text-align: center;
        line-height: 90px;

    }
.search>div>input{
    height: 30px;
    width: 60%;
    font-size: 16px;
    border:1px solid #333333;
    padding-left: 10px;
    border: 1px solid rgba(255,255,255,.95);
    border-radius: 2px;
    background-color: rgba(255,255,255,.95);
    color: #444;
    box-shadow: 0 16px 32px 0 rgba(0,0,0,.07), 0 1px 3px 0 rgba(0,0,0,.02), 0 0 0 1px rgba(0,0,0,.1);
    outline: none;
}
.search>div>button{
    height: 28px;
    position: relative;
    margin-left: -70px;
    top:2px;
    outline: none;
    font-size: 18px;
    border:0px;
    background-color: white;
}
    .recommend-line{
        margin-top: 30px;
        text-align: center;
        position: relative;
    }
    .recommend-line>a{
        display: inline-block;
        font-size: 16px;
        color: #999;
    }
    .recommend-line:before {
        display: block;
        position: absolute;
        right: 0;
        top: 15px;
        width: 44%;
        content: "";
        border-top: 1px solid  #ededed
    }
    .recommend-line:after {
        display: block;
        position: absolute;
        top: 15px;
        width: 44%;
        content: "";
        border-top: 1px solid  #ededed
    }
    .recommend-room{
        height: 200px;
        width: 100%;
        background-color: palegoldenrod;
        margin: auto;
        line-height: 200px;

    }
    .recommend-room>div{
        display: flex;
        text-align: center;
    }
    .recommend-room>div>div{
        flex: 1;
    }
    .comment-line{
        line-height: 40px;
        padding-left: 20px;
        position: relative;
    }
    .comment-line>a{
        padding: 0 10px;
    }
    .comment-line:after{
        display: block;
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
        content: "";
        border-top: 1px solid  #ededed
    }
    .comment-room{
        height: 300px;
        background-color: paleturquoise;
        line-height: 300px;
        text-align: center;
    }

</style>

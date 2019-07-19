<template>
  <div>
    <div class="page">
      <div class="banner">
        <img  src="../assets/banner/banner1.jpg"/>
      </div>
      <div class="banner_maim">
        <ul>
          <li>
            <img  src="../assets/banner/banner1.jpg"/>
            <span>为什么说世界上程序员最帅</span>
          </li>
          <li>
            <img  src="../assets/banner/banner1.jpg"/>
            <span>为什么说世界上程序员最帅</span>
          </li>
        </ul>
      </div>
      <div class="user_wrap">
        <div>
          <span>我的名片</span>
          <ul>
            <li v-for="item in list">{{item.name}}</li>
          </ul>
          <ol>
            <li>
              <img  src="../assets/banner/banner1.jpg"/>
            </li><li>
              <img  src="../assets/banner/banner1.jpg"/>
            </li><li>
              <img  src="../assets/banner/banner1.jpg"/>
            </li><li>
              <img  src="../assets/banner/banner1.jpg"/>
            </li>
          </ol>
        </div>
      </div>
    </div>
      <div  class="page list_wrap ">
<div>

  <h2>个人博客日记</h2>

</div>
<div class="mians">123</div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            list:[
              {
                name:"网名: 狼狼"
              },
              {
                name:'职业: C#开发工程师'
              },
              {
                name:'现居: 上海市-松江区'
              }, {
                name:'Email：2695500678@qq.com'
              },
            ]
          }
      },
      mounted() {

      }
    }
</script>

<style scoped lang="scss">
  .page{
    width: 90%;
    margin:20px auto;
    display: flex;
    justify-content: flex-start;
    max-width: 1200px;
  }
.banner{
  flex: 8;
  overflow: hidden;
  img{
    width: 100%;
    height: 260px;
    margin: auto;
    border-radius: 5px;
  }
}
  .banner_maim{
    flex: 3;
    margin-left: 10px;
    ul{
      li{
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        max-width: 270px;
        height: 125px;
        img{
          cursor: pointer;
          transition: all 0.6s;
          opacity: .7;
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
        img:hover{
          transform: scale(1.4);
          opacity: .7;
        }
        span{
          bottom: 0;
          position: absolute;
          top: 30%;
          left: 0;
          right: 0;
          color: #FFF;
          text-align: center;
          font-size: 15px;
          margin-top: 5px;
          padding: 0 40px;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-height: 24px;
          height: 48px;

        }
      }
      li:nth-child(1){
        margin-bottom: 10px;
      }
    }
  }
  .user_wrap{
    flex: 3;
    min-width: 280px;
    margin-left: 20px;
    border-radius: 5px;
    height: 260px;
    background-color: #333333;
div{
  padding: 20px;
  p{
    color: #89919a;
    font-size: 22px;
    margin-bottom: 20px;
  }
  ul{
    li{
      line-height: 30px;
      color: #d0d2d4;
    }
  }
  ol{
    margin-top: 15px;
    li{
      display: inline-block;
      padding: 0 10px;
      img{

        width: 36px;
        height: 36px;
        border-radius: 50%;
      }
    }
  }
}

  }





.list_wrap{

  max-width: 1200px;
div:nth-child(1){

  flex: 11;
  background-color: white;
  height: 100px;
  padding: 20px;
  h2{
    transition:width 2s;
    font-size: 16px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
    color: #484848;
    font-weight: normal;
    position: relative;
    margin-bottom: 10px;
  }
  h2::after{
    content: "";
    position: absolute;
    width: 100px;
    height: 2px;
    content: "";
    background: #000;
    left: 0;
    bottom: 0;
    -moz-transition: all .5s ease;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;

}
  h2:hover{
    background: linear-gradient(to top, red, blue);
    -webkit-background-clip: text;
    color: transparent;
    &:after{
      width: 120px;
      background: #000 linear-gradient(to top, red, blue);;
    }
  }



}
  .mians{
    border-radius: 5px;
    background-color: white;
    min-width: 280px;
    flex: 3;
    margin-left: 20px;
  }
}
</style>

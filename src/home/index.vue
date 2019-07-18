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
            <p>为什么说世界上程序员最帅</p>
          </li>
          <li>
            <img  src="../assets/banner/banner1.jpg"/>
            <p>为什么说世界上程序员最帅</p>
          </li>
        </ul>
      </div>
      <div class="user_wrap">
        <div>
          <p>我的名片</p>
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
<div>123</div>
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
      }
    }
</script>

<style scoped lang="scss">
  .page{
    width: 90%;
    margin:20px auto;
    display: flex;
    justify-content: flex-start;
  }
.banner{
  flex: 8;
  overflow: hidden;
  img{
    width: 100%;
    height: 260px;
    margin: auto;
    border-radius: 10px;
  }
}
  .banner_maim{
    flex: 3;
    margin-left: 10px;
    ul{
      li{
        border-radius: 10px;
        overflow: hidden;
        width: 270px;
        height: 125px;
        img{
          cursor: pointer;
          transition: all 0.6s;
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
        img:hover{
          transform: scale(1.4);
        }
        p{
          width: 100%;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          position: absolute;
          margin: -60px auto;
          color: red;
          z-index: 999;

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
    border-radius: 10px;
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

  background-color: red;
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
  
}
  div:nth-child(2){
    margin-left: 20px;
    flex: 3;
  }
}
</style>

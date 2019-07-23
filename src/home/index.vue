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
<div class="list_info">
  <h2>个人博客日记</h2>
    <router-view></router-view>
</div>
<div class="mians">
  <div>
    <h2>最近更新</h2>
    <ul>
      <li v-for="item in nextlist">
        <a>{{item.title}}</a>
      </li>
    </ul>
  </div>

</div>
      </div>
<!--    个人推荐-->
    <div class="page list_wrap">
      <div class="list_info">
        <h2>个人特别推荐</h2>
        <ul>
            <li v-for="item in readerlist">
            <i>
              <a>
                <img :src="item.readerimg" />
              </a>
            </i>
            <b>{{item.name}}</b>
            <span>{{item.title}}</span>
            <a class="reader-list-btn">文章阅读</a>
          </li>

        </ul>
        <div class="list_info">
          <h2>个人特别推荐</h2>
          <ol>
            <li v-for="item in readerlist">
              <i>
                <a>
                  <img :src="item.readerimg" />
                </a>
              </i>
              <b>{{item.name}}</b>
              <span>{{item.title}}</span>
              <a class="reader-list-btn">文章阅读</a>
            </li>

          </ol>
        </div>
      </div>
      <div class="mians">
        <ol class="side">
          <h2>点击排行</h2>
          <ol>
            <li>
              <a>
                <img  src="../assets/4.jpg"/>
                <span>sadadasdadasdadasdasdadadasddasdasdasdadasdasdasd</span>
              </a>
            </li>
          </ol>
          <ul>
            <li v-for="item in readerlist " :key="item.name">
              <a>
                <img  :src="item.readerimg" />

              </a>
              <p>{{item.title}}</p>
            </li>
          </ul>
        </ol>
        <ol class="side">
          <h2>点击排行</h2>
          <ol>
            <li>
              <a>
                <img  src="../assets/4.jpg"/>
                <span>sadadasdadasdadasdasdadadasddasdasdasdadasdasdasd</span>
              </a>
            </li>
          </ol>
          <ul>
            <li v-for="item in readerlist " :key="item.name">
              <a>
                <img  :src="item.readerimg" />

              </a>
              <p>{{item.title}}</p>
            </li>
          </ul>
        </ol>
        <ol class="side">
          <h2>猜你喜欢</h2>
        </ol>
      </div>
    </div>
    <div>
      <a>
        <img >
      </a>
      <div>
        <b></b>
        <span></span>
      </div>
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
            ],
            nextlist:[
              {
                title:'我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦'
              },
                {
                title:'我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦'
              },
                {
                title:'我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦'
              },
                {
                title:'我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦'
              },
            ],
            readerlist:[
              {
                readerimg:require('../assets/4.jpg'),
                name:"我也是一个美丽的小女孩子哦",
                title:"我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦"
              },
               {
                readerimg:require('../assets/4.jpg'),
                name:"我也是一个美丽的小女孩子哦",
                title:"我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦"
              },
               {
                readerimg:require('../assets/4.jpg'),
                name:"我也是一个美丽的小女孩子哦",
                title:"我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦"
              },
               {
                readerimg:require('../assets/4.jpg'),
                name:"我也是一个美丽的小女孩子哦",
                title:"我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦"
              },
               {
                readerimg:require('../assets/4.jpg'),
                name:"我也是一个美丽的小女孩子哦",
                title:"我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦"
              },
               {
                readerimg:require('../assets/4.jpg'),
                name:"我也是一个美丽的小女孩子哦",
                title:"我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦我也是一个美丽的小女孩子哦"
              },

            ]
          }
      },
      mounted() {

      }
    }
</script>

<style scoped lang="scss">
  @import "../assets/style.scss";
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

.list_info{
border-radius: 5px;
  flex: 11;
  background-color: white;
height: 100%;
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

  ul{
    width: 100%;
    overflow: hidden;
    padding: 10px 0px 20px 10px;
    position: relative;
    li{
      width: 27.6%;
      overflow: hidden;
float: left;
      padding: 20px;
      border-bottom: #eee 1px solid;
      border-left: #eee 1px solid;
      transition: all .5s ease;
      i{
        width: 100%;
        height: 100px;
        overflow: hidden;
        border-radius: 3px;
        background: #CCC;
        display: block;
        a{
          img{
            border-radius: 5px;
            display: inline-block;
            width: 100%;
            min-height: 100%;
            height: auto;
            vertical-align: middle;
            transition: all .5s ease-out .1s;


          }
          img:hover{
            transform: scale(1.4);
            opacity: .7;

          }
        }

      }
      b{
        display: block;
        width: 100%;
        overflow: hidden;
        height: 30px;
        line-height: 30px;
        margin: 10px 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

      }
      span{
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        font-size: 14px;
        height: 62px;
        display: block;

      }
      .reader-list-btn{
        margin: 10px 0 0 0;
        color: #096;
        display: block;

      }
      .reader-list-btn:before{
        content: "+";
        color: #063;
      }
    }
  }
  ul:before{
    content: "";
    position: absolute;
    background: #fff;
    width: 1px;
    height: 100%;
    left: 10px;
  }
}
  .mians{
    border-radius: 5px;
    background-color: white;
    min-width: 280px;
    width: 100%;
    height: 1%;
    flex: 3;
    margin-left: 20px;
    div{
      padding: 20px;
      ul{
        margin-top: 30px;
        li {
          text-overflow: ellipsis;
          white-space: nowrap;
          position: relative;
          font-size: 12px;
          transition: all .2s ease;
          line-height: 30px;
          padding: 20px;
          margin-bottom: 12px;
          padding: 4px 12px 4px 30px;
          overflow: hidden;
          background: #f7f7f7;
          border-radius: 4px;
        }
        li:before{
          position: absolute;
          content: "";
          width: 3px;
          height: 3px;
          background: #000;
          border-radius: 10px;
          left: 15px;
          top: 16px;
        }
        li:hover{
          box-shadow: 0px 0px 2px 2px #66CCCC;

        }
      }
    }
    .side{
      background-color: white;
      padding: 20px;
      border-bottom: 20px solid #f7f7f7;
      ul{
        li{
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 0px;
          a{
            flex: 2;
            max-width: 70px;
            min-width: 70px;
            height: 70px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          p{
            flex: 4;
            padding-left: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-height: 24px;
          }
        }
      }
      ol{
        li{
          position: relative;
          display: block;
          margin: 20px 0;
          background: #000;
          position: relative;
          overflow: hidden;
          border-radius: 3px;
          max-height: 110px;
          a{
            img{
              width: 100%;
              height: 100%;
            }
            span{
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
              /*display: -webkit-box;*/
              -webkit-line-clamp: 2;
              width: 100%;

            }
          }
        }
      }
    }

  }
}
</style>

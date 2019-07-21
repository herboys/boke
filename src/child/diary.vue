<template>
<div class="diary">
  <div class="diary_banner">
    <ul>
      <li v-for="(item,index) in diary_banber_list" :key="item.index">
        <img :src="item.diary_bannerimg" />
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
  <div class="diary_room">
    <ul>
      <li :class="{'hoverBg':index==hoverIndex}"
          v-for="(item,index) in diary_newlist"
          :key="index"
          @mouseover="hoverIndex = index"
          @mouseout="hoverIndex = 0"
      >
        <i>
          {{index+1}}
        </i>
        <a>{{item.name}}</a>
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
    export default {
        name: "diary",
      data(){
          return{
            diary_banber_list:[
              {
                title:"第一张图片",
                diary_bannerimg:require('../assets/banner/banner1.jpg')
              },
              {
                title:"第一张图片",
                diary_bannerimg:require('../assets/4.jpg')
              },
            ],
            diary_newlist:[
              {
                name:"做一个安静的小公主",
                title:"自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当看到自己喜欢的配色图片"
              },
               {
                name:"做一个安静的小公主",
                title:"自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当看到自己喜欢的配色图片"
              },
               {
                name:"做一个安静的小公主",
                title:"自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当看到自己喜欢的配色图片"
              },
               {
                name:"做一个安静的小公主",
                title:"自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当看到自己喜欢的配色图片"
              },
            ],
            hoverIndex: 0,
          }
      },
      methods:{
      }
    }
</script>

<style scoped lang="scss">
  .diary{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:space-between;
    .diary_banner{
      width: 30%;
      ul{
        li{
          height: 100px;
          overflow: hidden;
          position: relative;
          border-radius: 5px;
          margin-bottom: 10px;
          img{
            cursor: pointer;
            transition: all 0.6s;
            width: 100%;
            height: 100%;
            border-radius: 5px;
          }
          img:hover{
            transform: scale(1.4);
            opacity: .7;
          }
          span{
            position: absolute;
            bottom: 30%;
            left: 0;
            right: 0;
            color: white;
            text-align: center;
            font-size: 15px;
            padding: 0 40px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-height: 22px;
          }
        }
      }
    }
    .diary_room{
      width: 68%;
      ul{
        li{
          padding: 6px 20px 10px 20px;
          i{
            float: left;
            display: block;
            width: 20px;
            height: 20px;
            background: #9a9a9a;
            margin-right: 16px;
            padding: auto;
            font-style: normal;
            text-align: center;
            color: #fff;
          }
          i:before{
            text-align: center;

          }
          a{
            color: #000;
            font-weight: bold;
          }
          p{
            display: none;
          }
        }
        .hoverBg{
          background-color: #f7f7f7;
          i{
            background-color: black;
          }
          p{
            line-height: 24px;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            height: 48px;
          }
        }


      }
    }
  }

</style>

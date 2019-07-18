<template>
<div >
  <div class="header"></div>
  <div class="banner">
    <img src="../assets/logo.png">
  </div>
  <div class="main"></div>
  <div>
    <div class="animation"></div>
<!--    <div class="start_five"></div>-->
  </div>
  <div class="mt_box">
    <div>
      main
    </div>
  </div>
<div class="bottom">
  <div  @click="btn">
    <button >
      <div >
<div></div>
<div></div>
<div></div>
<div></div>
<div>
  <div></div>
</div>
      </div>
      立即预约
    </button>
    <div class="outter" ></div>
  </div>
</div>
</div>
</template>
<script>
  import {mapMutations,mapState} from "vuex"
  export default {
    data(){
      return{
        setReview:123,

      }
    },
computed:{
  ...mapState(["uid"])
},
    methods:{
      ...mapMutations(['UID']),
      btn(){
        console.log(typeof this.setReview)
        this.UID(this.setReview)
      },

    }
  }
</script>
<style lang="scss">
.header{
  width: 100%;
  padding: 5px 0;
  height: 50px;
  background-color: #333;
}
.header:before{
  background: #000 linear-gradient(to left, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  content: "";
  height: 5px;
  position: absolute;
  top: 0;
  width: 100%;
}
.banner{
  width: 96%;
  margin: 0 auto ;
  height: 50px;
  background-color: red;
  overflow: hidden;
}
.banner img{
  cursor: pointer;
  transition: all 0.6s;
}
.banner img:hover{
  transform: scale(1.4);
}
.main{
  border-bottom: 3px solid red;
  width: 100px;
  transition:width 2s;
}
.main:hover{
width: 130px;
}
  .animation{
    width:100px;
    height:100px;
    background:red;
    position:relative;
    animation:mymove 5s infinite;
    z-index: 99999;
  }
  @keyframes mymove{
    from {
      top:0px;
    }
    to {
      top:200px;
    }
  }

  .bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: antiquewhite;
    text-align: center;
    button{
      position: relative;
      z-index: 99999;
      border:2px solid white;
      outline: none;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      color: white;

      font-size: 16px;
      background: radial-gradient(circle at 50px 100px , rgba(9,209,90,1),rgba(116,221,53,1));
      font-weight: bold;
      line-height: 6px;
      div{
        margin-left: -4px;
       div:nth-child(1){
         width: 15px;
         height: 3px;
         margin: auto;
         background-color: white;
       }
        div:nth-child(2){
          width: 30px;
          height: 3px;
          margin: auto;
          background-color: white;
        }
        div:nth-child(3){
          width: 30px;
          height: 8px;
          border-bottom-left-radius: 4px;
          margin:1px auto 0px auto;
          background-color: white;
          position: relative;
        }
        div:nth-child(4){
          width: 26px;
          height: 25px;
          position: relative;
          top: 0;
          left: 2px;
          margin: auto;
          border-radius: -20px;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
          background-color: white;
        }
        div:nth-child(5){
          width: 13px;
          height: 13px;
          border-radius: 50%;
          margin: auto;
          /*background:#3ed748;*/
          position: relative;
          top: -10px;
          left: 13px;
          div{
            background:white;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            border:2px solid #3ed748;
          }
        }

      }
    }
    .outter{
      margin: auto;
      margin-top: -80px;
      animation-name: bubble;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      opacity: .7;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #09d15a;
    }
  }

  @keyframes bubble {
    0% {
      transform: scale(1);
      opacity: .3
    }
    25% {
      opacity: .3;
      transform: scale(1.8)
    }
    100%, 50% {
      opacity: 0;
      transform: scale(2)
    }
  }

  .mt_box{
    margin: auto;
    text-align: center;
    position: fixed;
    bottom: 100px;
    width: 100%;
    margin: auto;
    animation-name: mtbox;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    border-radius: 10px;
  div{
    margin: auto;
    background-color: #09d15a;
    width: 100px;
    height: 100px;
  }
  }
  @keyframes mtbox {
    0% {
     bottom: 100px;

      transform: scale(1);

    }
    25% {
bottom: 200px;
      transform: scale(1.8)
    }
    100% {
      bottom: 250px;
      transform: scale(2)
    }
  }
</style>

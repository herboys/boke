<template>
    <div>
      <div class="header" >
        <ul ref='menu'
            :default-active="$route.path"
            unique-opened>
          <span>灰太狼个人博客</span>
          <li v-for="item in list">
            <router-link :to="{name:item.NamePath}" >
              {{item.Name}}
            </router-link>
          </li>
          <div>灰太狼</div>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "headers",
      data(){
          return{
            list:[
              {
                id:1,
                Name:"网站首页",
                NamePath:"index"

              },{
                id:1,
                Name:"个人博客日记",

              },{
                id:1,
                Name:"网站制作",

              },{
                id:1,
                Name:"设计心得",

              },{
                id:1,
                Name:"关于我",

              },{
                id:1,
                Name:"时间轴",

              },{
                id:1,
                Name:"博客导航",

              },{
                id:1,
                Name:"留言",

              }
            ]
          }
      },
      methods:{

      }
    }
</script>

<style scoped lang="scss">
  @import "../assets/index";

</style>

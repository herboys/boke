<template>
    <div>
<v-header></v-header>
      <router-view></router-view>
    </div>
</template>

<script>
  import headers from "@/components/headers"
    export default {
        name: "home",
      components:{
         "v-header": headers
      },
      data(){
        detailInfo: {}
      },
      mounted(){
        console.log(111)

      },
    }
</script>

<style scoped>

</style>

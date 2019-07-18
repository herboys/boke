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
      }
    }
</script>

<style scoped>

</style>

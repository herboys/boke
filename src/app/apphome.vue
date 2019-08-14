<template>

    <div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <template>
            <v-app-bottom  class="v-app-bottom"></v-app-bottom>
        </template>
    </div>
</template>

<script>
    import appbottom from  "@/app/app_bottom/appbottom"
    export default {
        name: "apphome",
        components:{
            'v-app-bottom':appbottom
        }
    }
</script>

<style scoped lang="scss">
.v-app-bottom{
    position: fixed;
    bottom: 0px;
}
</style>

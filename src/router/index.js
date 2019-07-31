import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import headers from '@/components/headers'
import index from '@/home/index'
import home from '@/components/home'
// child
import diary from '@/child/diary'
import echarts from '@/child/echarts'
// dome
import dome from "@/dome/dome"
Vue.use(Router)

export default new Router({
    routes: [
        {
        path: '/dome',
        name: 'dome',
        component: dome
    },    {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/',
        name: 'headers',
        component: headers
    }, {
        path: '/echarts',
        name: 'echarts',
        component: echarts
    },
      {
        path: '/home',
        name: 'home',
        component: home,
        children: [{
            path: '/',
            name: 'index',
            component: index,
          children: [
            {
              path:'/',
              name:'diary',
              component:diary
            }
          ]
        }, ]
    }, ]
})

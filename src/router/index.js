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
import updataimg from "@/dome/updataimg"
//mock
import SignIn from  "@/mock/SignIn"
// APP 项目
import appindex from  "@/app/appindex"
import apphome from  "@/app/apphome"
import appbottom from  "@/app/app_bottom/appbottom"
import appnews from  "@/app/app_bottom/appnews"
import appContacts from  "@/app/app_bottom/appContacts"
import appSpot from  "@/app/app_bottom/appSpot"
import appdynamic from  "@/app/app_bottom/appdynamic"


// help
import helpmain from  "@/help/helpmain"


Vue.use(Router)
export default new Router({
    mode: 'history',
    srcollBehavior(to,from,savedPosition){
        if(to.hash){
            return {
                selector:to.hash
            }
        }
    },
    routes: [
        // help
        {
            path: '/helpmain',
            name: 'helpmain',
            component: helpmain
        },
        // app 项目
        {
        path: '/',
        name: 'appindex',
        component: appindex
    },{
        path: '/apphome',
        name: 'apphome',
        component: apphome,
            children:[
                {
                    path: '/',
                    name: 'appnews',
                    component: appnews
            },{
                    path: '/app_bottom/appnews',
                    name: 'appnews',
                    component: appnews
            },{
                    path: '/app_bottom/appContacts',
                    name: 'appContacts',
                    component: appContacts
            },{
                    path: '/app_bottom/appSpot',
                    name: 'appSpot',
                    component: appSpot
            },{
                    path: '/app_bottom/appdynamic',
                    name: 'appdynamic',
                    component: appdynamic
            },
            ]
    },{
        path: '/app_bottom/appbottom',
        name: 'appbottom',
        component: appbottom
    },


        {
        path: '/SignIn',
        name: 'SignIn',
        component: SignIn
    },{
        path: '/dome',
        name: 'dome',
        component: dome
    }, {
        path: '/updataimg',
        name: 'updataimg',
        component: updataimg
    },    {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/headers',
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


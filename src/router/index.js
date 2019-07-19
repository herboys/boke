import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import headers from '@/components/headers'
import index from '@/home/index'
import home from '@/components/home'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/',
        name: 'headers',
        component: headers
    }, {
        path: '/home',
        name: 'home',
        component: home,
        children: [{
            path: '/index',
            name: 'index',
            component: index
        }, ]
    }, ]
})
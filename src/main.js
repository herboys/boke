// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import axios from 'axios';
//定义全局变量
import 'mint-ui/lib/style.css';
import store from "./store/store";
import directives from './directives'

Vue.config.productionTip = false
directives.init(Vue);
Vue.use(axios)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})

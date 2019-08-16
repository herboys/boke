
import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
import store from '@/store/store';
// 环境的切换
axios.defaults.baseURL = ""
    // if (process.env.NODE_ENV == 'development') {
    //     axios.defaults.baseURL = 'https://www.baidu.com';
    // } else if (process.env.NODE_ENV == 'debug') {
    //     axios.defaults.baseURL = 'https://www.ceshi.com';
    // } else if (process.env.NODE_ENV == 'production') {
    //     axios.defaults.baseURL = 'https://www.production.com';
    // }
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


axios.interceptors.response.use(
        response => {
          // console.log(response)
            if (response) {
                return Promise.resolve(response);
            } else {
                return Promise.reject(response);
            }
        },
        error => {
          console.log(error.response.status)
            if (error.response.status) {
                switch (error.response.status) {
                    case 401:
                        break;
                    case 500:
                        setTimeout(() => {
                          location.href="http://localhost:8080/#/HelloWorld"
                          // router.push({path: '/HelloWorld'})

                        }, 1000);
                        break;
                    case 404:
                        alert("1")
                        break;
                    default:
                        alert("1")
                }
                return Promise.reject(error.response);
            }
        })
    /**
     * get方法，对应get请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

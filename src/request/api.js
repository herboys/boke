import {get, post } from './http'
export const apiAddress = p => post('https://www.txkuaiyou.com/waste/users/userInfo', p);
// 模拟注册
export const AdminSignIn=p=>get('http://localhost:3000/BolgRegister',p)
// 模拟登录
export const BolgLogin=p=>post('http://localhost:3000/BolgLogin',p)
export const GoodsList=p=>post('http://localhost:3000/GoodsList',p)

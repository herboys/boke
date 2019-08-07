import {get, post } from './http'
export const apiAddress = p => post('https://www.txkuaiyou.com/waste/users/userInfo', p);
// 模拟登陆
export const AdminSignIn=p=>get('http://localhost:3000/home',p)

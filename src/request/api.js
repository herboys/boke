import {get, post } from './http'
export const apiAddress = p => post('/waste/users/userInfo', p);

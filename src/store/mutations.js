// 设置商品详细信息
export const UID = (state, data) => {
  console.log(data)
  state.uid = data
}
export const loginSuccess = (state, data) => {
  console.log(data)
  state.loginSuccess = data
}



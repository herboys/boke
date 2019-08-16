import LeftMove from './leftMove'

function init (vue) {
    console.log(vue)
    vue.directive('LeftMove', LeftMove)
}
export default {
    init: init
}

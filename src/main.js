// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
//  默认创建的Vue实例
new Vue({
  // el是vue实例化的选项，提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。
  el: '#app',
  router,
  components: { App },
  // 作为 Vue 实例的标识使用。模板将会替换挂载的元素。
  // 挂载元素的内容都将被忽略，除非模板的内容有分发 slot。
  template: '<App/>'
})

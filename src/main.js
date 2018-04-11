// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyCfBGD1MKerZLI0Xb81X62IOvPMSwy1xh8',
  authDomain: 'blue-work.firebaseapp.com',
  databaseURL: 'https://blue-work.firebaseio.com',
  projectId: 'blue-work',
  storageBucket: 'blue-work.appspot.com',
  messagingSenderId: '624407055153'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

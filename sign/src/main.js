import Vue from 'vue'
import App from './App'
<<<<<<< HEAD
import store from './store';
Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store=store;
=======
import store from './store'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store;

>>>>>>> zwl
const app = new Vue(App)
app.$mount()

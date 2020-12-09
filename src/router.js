import {createRouter, createWebHashHistory} from 'vue-router';
import Login from './view/Login.vue';
import UserInfo from './view/UserInfo.vue';


const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/login',
    component: Login
  }, {
    path: '/user_info',
    component: UserInfo
  }]
})

export default router

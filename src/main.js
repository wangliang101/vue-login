import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ant from './plugins/Ant'
import './global.less'


const app = createApp(App)

//获取cookie、
function getCookie(name) {
  var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  var arr = document.cookie.match(reg) || []
  if (arr.length)
    return (arr[2]);
  else
    return null;
}

//设置cookie
function setCookie(c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie =
    c_name +
    '=' +
    escape(value) +
    (expiredays == null ? '' : ';expires=' + exdate.toGMTString());
}

//删除cookie
function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
}

app.mixin({
  methods: {
    $getCookie: getCookie,
    $setCookie: setCookie,
    $delCookie: delCookie
  }
})

app.use(router).use(store).use(ant).mount('#app')

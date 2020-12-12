<template>
  <div class="app-wrap">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      isLogin: false,
      userInfo: {
        //保存用户信息
        nick: null,
        ulevel: null,
        uid: null,
        portrait: null,
      },
    };
  },
  watch: {
    $route: 'checkLogin',
  },
  created() {
    this.checkLogin();
  },
  mounted() {
    //组件开始挂载时获取用户信息
    this.getUserInfo();
  },
  methods: {
    checkLogin() {
      //检查是否存在session
      if (!this.$getCookie('session')) {
        this.$router.push('/login');
      } else {
        this.$router.push('/user_info');
      }
    },
    //请求用户的一些信息
    getUserInfo() {
      //发送http请求获取，这里写死作演示
      this.userInfo = {
        nick: 'wliang',
        ulevel: 20,
        uid: '10000',
        portrait:
          'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      };

      //实例开发中这里会向服务端请求数据
      //如下(用了vue-resource):
      /*ts.$http.get(url, {
        //参数
        "params":{}
      }).then((response) => {
        //Success
      }, (response) => {
        //Error
      });*/

      //提交mutation到Store
      this.$store.commit('updateUserInfo', this.userInfo);
    },
  },
};
</script>

<style lang="less">
#app {
  height: 100%;
  .app-wrap {
    height: 100%;
  }
}
</style>

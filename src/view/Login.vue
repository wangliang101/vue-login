<template>
  <div class="login">
    <div class="container">
      <div class="top">
        <div class="header">
          <a href="/">
            <span class="title">Ant Login</span>
          </a>
        </div>
        <div class="desc">
          结合 Ant Design Pro UI 实现登录系统
        </div>
      </div>
      <a-form
        id="formLogin"
        class="user-layout-login main"
        @submit="handleSubmit"
      >
        <a-tabs :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }">
          <a-tab-pane key="tab1" tab="账号密码登录">
            <a-alert
              v-if="isLoginError"
              type="error"
              showIcon
              style="margin-bottom: 24px;"
              message="账户或密码错误（user/pass)"
            />
            <a-form-item>
              <a-input size="large" type="text" placeholder="账户: admin">
                <template #prefix><user-outlined type="user"/></template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input-password size="large" placeholder="密码: pass">
                <template #prefix><lock-outlined type="lock"/></template>
              </a-input-password>
            </a-form-item>
          </a-tab-pane>
          <a-tab-pane key="tab2" tab="手机号登录">
            <a-form-item>
              <a-input size="large" type="text" placeholder="手机号: admin">
                <template #prefix><user-outlined type="user"/></template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input-password size="large" placeholder="密码: pass">
                <template #prefix><lock-outlined type="lock"/></template>
              </a-input-password>
            </a-form-item>
          </a-tab-pane>
        </a-tabs>

        <a-form-item>
          <a-checkbox>自动登录</a-checkbox>
          <router-link
            :to="{ path: '/login' }"
            class="forge-password"
            style="float: right;"
            >忘记密码</router-link
          >
        </a-form-item>
        <a-form-item style="margin-top:24px">
          <a-button
            size="large"
            type="primary"
            htmlType="submit"
            class="login-button"
            >确定</a-button
          >
        </a-form-item>
      </a-form>

      <div class="footer">
        <div class="links">
          <a href="_self">帮助</a>
          <a href="_self">隐私</a>
          <a href="_self">条款</a>
        </div>
        <div class="copyright">
          Copyright &copy; 2020 vueComponent
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
export default {
  name: 'Login',
  data() {
    return {
      customActiveKey: 'tab1',
      isLoginError: false,
      isLoging: false,
      account: '',
      password: '',
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
  },
  methods: {
    //登录逻辑
    login() {
      if (this.account != '' && this.password != '') {
        this.handleSubmit();
      }
    },

    //登录请求
    handleSubmit() {
      console.log('ppp', this);
      //一般要跟后端了解密码的加密规则
      //这里例子用的哈希算法来自./js/sha1.min.js
      // let password_sha = hex_sha1(hex_sha1(this.password));

      //需要想后端发送的登录参数
      // let loginParam = {
      //   account: this.account,
      //   password_sha,
      // };

      //设置在登录状态
      this.isLoging = true;

      //请求后端,比如:
      /*this.$http.post( 'example.com/login.php', {
  		param: loginParam).then((response) => {
        if(response.data.code == 1){
          let expireDays = 1000 * 60 * 60 * 24 * 15;
          this.setCookie('session', response.data.session, expireDays);
          //登录成功后
          this.$router.push('/user_info');
        }
	    }, (response) => {
	        //Error
	    });
  		*/

      //演示用
      setTimeout(() => {
        //登录状态15天后过期
        let expireDays = 1000 * 60 * 60 * 24 * 15;
        this.$setCookie('session', 'blablablablabla...', expireDays);
        this.isLoging = false;
        //登录成功后
        this.$router.push('/user_info/');
      }, 3000);
    },
  },
};
</script>

<style lang="less" scoped>
.login ::v-deep {
  height: 100%;
  .container {
    width: 100%;
    min-height: 100%;
    background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
    background-size: 100%;
    padding: 110px 0 144px;
    a {
      text-decoration: none;
    }
    .top {
      text-align: center;
      .header {
        height: 44px;
        line-height: 44px;
        .badge {
          position: absolute;
          display: inline-block;
          line-height: 1;
          vertical-align: middle;
          margin-left: -12px;
          margin-top: -10px;
          opacity: 0.8;
        }
        .title {
          font-size: 33px;
          color: rgba(0, 0, 0, 0.85);
          font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
      .desc {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        margin-top: 12px;
        margin-bottom: 40px;
      }
    }
    .main {
      min-width: 260px;
      width: 368px;
      margin: 0 auto;

      .ant-form-item-control-wrapper {
        flex: 1;
      }

      .ant-form-item-control-wrapper {
        flex: 1 1;
        display: inline-block;
        vertical-align: middle;
      }

      label {
        font-size: 14px;
      }

      button.login-button {
        padding: 0 15px;
        font-size: 16px;
        height: 40px;
        width: 100%;
      }
    }
    .footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 0 16px;
      margin: 48px 0 24px;
      text-align: center;

      .links {
        margin-bottom: 8px;
        font-size: 14px;
        a {
          color: rgba(0, 0, 0, 0.45);
          transition: all 0.3s;
          &:not(:last-child) {
            margin-right: 40px;
          }
        }
      }
      .copyright {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
    }
  }
}
</style>

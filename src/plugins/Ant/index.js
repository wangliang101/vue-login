import {
  Carousel,
  ConfigProvider,
  Button
} from 'ant-design-vue'

const ant = {
  install (Vue) {
    Vue.component(Carousel.name, Carousel)
    Vue.component(ConfigProvider.name, ConfigProvider)
    Vue.component(Button.name, Button)
  }
}

export default ant
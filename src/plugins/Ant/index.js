import {
  Form,
  Tabs,
  Button,
  Spin,
  Input,
  Alert,
  Checkbox
} from 'ant-design-vue'
const { Password } = Input;
const { TabPane } = Tabs;
const { Item } = Form;

const ant = {
  install(Vue) {
    Vue.component(Form.name, Form)
    Vue.component(Item.name, Item)
    Vue.component(Tabs.name, Tabs)
    Vue.component(TabPane.name, TabPane)
    Vue.component(Button.name, Button)
    Vue.component(Spin.name, Spin)
    Vue.component(Input.name, Input)
    Vue.component(Password.name, Password)
    Vue.component(Alert.name, Alert)
    Vue.component(Checkbox.name, Checkbox)
  }
}

export default ant
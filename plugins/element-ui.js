import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'

// 按需引用
import { Button, Message } from 'element-ui'
Vue.component(Button.name, Button)
Vue.component(Message.name, Message)
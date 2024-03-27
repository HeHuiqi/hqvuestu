import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import { account,product } from './moudles'
import  HqPlugin  from './hqplugins'


Vue.use(Vuex)

// 状态对象
// 初始化状态 这里放置的状态可以被多个组件共享
const state = { 
    isLoading: false,
    count: 100, // 在组件中获取状态 this.$store.state.count
    userName: 'jack', // 在组件中获取状态 this.$store.state.userName
}

// 包含多个getter计算属性函数的对象
const getters = {}

const store = new Vuex.Store(
    {
        state, // 状态
        mutations, // 包含多个更新state函数的对象
        actions, // 包含多个队形事件回调函数的对象
        getters, // 包含多个getter计算属性函数的对象
        //为了减轻store，将其按模块分割
        modules:{
            account:account,
            product:product
        },
        //插件会监听到mutation的变化
        plugins:[HqPlugin],
        // 在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误
        // 这能保证所有的状态变更都能被调试工具跟踪到。
        // 不要在发布环境下启用严格模式
        strict: process.env.NODE_ENV !== 'production'

    }
)

export default store
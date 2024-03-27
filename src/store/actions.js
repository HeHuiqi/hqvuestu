export const action_type_increment = 'increment'
export const action_type_incrementNumber = 'incrementNumber'
export const action_type_incrementNumber_async = 'incrementNumber_async'

import { mutation_type_increment, mutation_type_incrementNumber, mutation_type_loading_start, mutation_type_loading_end } from '@/store/mutations'

/*
Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作
*/
// 包含多个队形事件回调函数的对象
// 处理异步事件
/* eslint-disable */ 
const actions = {
    [action_type_increment]: (context) => {
        //  这里的 context 并不是 store 对象实例，不过它有commit()方法来提交mutation
        //action 中处理完任务后提交的 mutation来触发状态更新

        // .... 处理异步任务

        context.commit(mutation_type_increment)
    },
    //适合全屏loading
    // [action_type_incrementNumber]: function (context, payload) {
    //     //提交开始loading
    //     context.commit(mutation_type_loading_start)
    //     //模拟异步任务
    //     setTimeout(() => {
    //         //提交结束loading
    //         context.commit(mutation_type_loading_end)
    //         //任务结束提交改变
    //         context.commit(mutation_type_incrementNumber, payload)
    //     }, 3000);
    // },

    //ES2015 的 参数解构 (opens new window)来简化代码（
    [action_type_incrementNumber]: function ({commit,state},payload) {
        console.log('state.count:',state.count)
        //提交开始loading
        commit(mutation_type_loading_start)
        //模拟异步任务
        setTimeout(() => {
            //提交结束loading
            commit(mutation_type_loading_end)
            //任务结束提交改变
            commit(mutation_type_incrementNumber, payload)
        }, 3000);
    },
    //由组件控制
    [action_type_incrementNumber_async]: function (context, payload) {

        //模拟异步任务
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //任务结束提交改变
                context.commit(mutation_type_incrementNumber, payload)
                resolve()
            }, 3000);
        });
    }
}
export default actions
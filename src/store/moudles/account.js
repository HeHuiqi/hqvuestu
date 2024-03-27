export const account = {
    // namespaced: true 的方式使其成为带命名空间的模块。当模块被注册后，
    // 它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名
    namespaced: true,
    state: {
        count: 5,
    }, // 状态
    mutations: {
        increment(state) {
            // 这里的 `state` 对象是模块的局部状态
            state.count++
        },
        incrementNumber(state,payload) {
            // 这里的 `state` 对象是模块的局部状态
            state.count = state.count + payload.amount
        }
    }, // 包含多个更新state函数的对象
    actions: {
        // rootState 访问的是全局的state
        // { state, commit,dispatch,rootGetters, rootState }
        // 在全局命名空间内分发 action 或提交 mutation, 将 { root: true } 作为第三参数传给 dispatch 或 commit 即可。
        // dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'
        incrementIfOddOnRootSum({ state, commit, rootState }) {
            if ((state.count + rootState.count) % 2 === 1) {
                commit('increment')
            }
        },
        incrementNumber({commit},payload) {
            commit('incrementNumber',payload)
        },
    }, // 包含多个队形事件回调函数的对象
    getters: {} // 包含多个getter计算属性函数的对象
}
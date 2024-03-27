export const mutation_type_increment = 'increment'
export const mutation_type_incrementFive = 'incrementFive'
export const mutation_type_incrementNumber = 'incrementNumber'
export const mutation_type_loading_start = 'loading_start'
export const mutation_type_loading_end = 'loading_end'



// 标记eslint 不对此变量进行检查
/* eslint-disable */ 
// 包含多个更新state函数的对象
const mutations_old = {
    // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
    //改变状态的一系列操作
    // 在组件中出发状态变更 this.$store.commit('increment')
    // es6 写法
    increment(state) {
        state.count++
    },
    incrementFive: function (state) {
        state.count = state.count + 5
    },
    // payload 接收传递的数据
    // 在大多数情况下，paylod应该是一个对象
    incrementNumber: function (state,paylod) {
        state.count = state.count + paylod.amount
    },
    
}

//推荐使用常量来定义 mutations_type_ 这样在外部就可以使用常量来提交了，避免拼写错误
// 处理同步事件
const mutations = {
    // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
    // mutation 必须是同步函数
    //改变状态的一系列操作
    // 在组件中出发状态变更 this.$store.commit(mutation_type_increment)
    [mutation_type_increment](state){
        state.count++
    },
    [mutation_type_incrementFive]:  (state) => {
        state.count = state.count + 5
    },
    // payload 接收传递的数据
    // 在大多数情况下，paylod应该是一个对象
    [mutation_type_incrementNumber]: function (state,paylod) {
        state.count = state.count + paylod.amount
    },
    [mutation_type_loading_start]: (state) => {
        state.isLoading = true
    },
    [mutation_type_loading_end]: (state) => {
        state.isLoading = false
    }
}
export default mutations
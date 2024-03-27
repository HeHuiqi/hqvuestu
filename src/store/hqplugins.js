const HqPlugin = store => {
    // 当 store 初始化后调用
    store.subscribe((mutation, state) => {
      // 每次 mutation 之后调用
      // mutation 的格式为 { type, payload }
      console.log('HqPlugin:-mutaion:',mutation)
      console.log('HqPlugin:-state:',state)

    })
}
export  function createWebSocketPlugin (socket) {
  return store => {
    socket.on('data', data => {
      //通过插件来提交数据
      store.commit('receiveData', data)
    })
    store.subscribe(mutation => {
      if (mutation.type === 'UPDATE_DATA') {
        socket.emit('update', mutation.payload)
      }
    })
  }
}
export default HqPlugin
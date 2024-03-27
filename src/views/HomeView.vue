<template>
  <div>
    <h1>home</h1>
    <p>
      <!-- 使用 router-link 来创建链接-->
      <router-link to="/store">Store 的使用</router-link> <br>
      <router-link to="/HqStoreModuleUse">Store Module 的使用</router-link> <br>
      <router-link to="/foo">Go to Foo</router-link> <br>
      <router-link to="/bar">Go to Bar</router-link> <br>
    </p>
    <HelloWorld msg="Hello Vue"></HelloWorld>
    <button v-on:click="showCustomDialog">Dialog</button>
    <CustomDialog :show-dialog="showDialog" v-on:confirm="dismissDialog" v-on:close="dismissDialog" :show-close="true">
      <p>弹框内容</p>
    </CustomDialog>
    <button @click="show = !show">Toggle</button>
    <Transition name="myAnimation">
      <p v-if="show">hello</p>
    </Transition>
    <p>{{ show }}</p>

  </div>

</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue';
import CustomDialog from '@/components/CustomDialog'
// import { ref } from 'vue'

// const show = ref(true)

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    CustomDialog
  },
  data() {
    return {
      showDialog: false,
      show: true
    }
  },
  methods: {
    showCustomDialog() {
      this.showDialog = true
    },
    dismissDialog() {
      this.showDialog = false
    }
  }
}
</script>

<style scoped>
.myAnimation-enter-from {
  opacity: 0;
}

.myAnimation-enter-to {
  opacity: 1;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
}

.myAnimation-leave-to {
  opacity: 0;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 1s;

}
</style>
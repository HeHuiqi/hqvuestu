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
  </div>

</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  }
}
</script>
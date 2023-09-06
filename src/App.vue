<template>
  <div id="app">
    <!-- <router-view /> -->
    <bsHeader />
    <!-- <Message /> -->
    <router-view />
  </div>
</template>

<script>
import bsHome from './views/bsHome.vue'
import bsHeader from '@/components/bsHeader.vue'
import Message from '@/components/Message.vue'


export default {
  name: 'App',
  components: {
    bsHeader,
    Message
  }
}
</script>

<style>
body{
      width:100%;
        margin: 0;
        /* background: #f1f4fa; */
        background:#FFFEFC;
    }
</style>

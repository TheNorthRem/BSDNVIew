<template>
  <div id="app">
    <bsHeader />
    <router-view />
  </div>
</template>

<script>
import bsHeader from '@/components/bsHeader.vue'



export default {
  name: 'App',
  components: {
    bsHeader,
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

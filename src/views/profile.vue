<template>
   <div class="common-layout">
    <el-container>
      <el-aside width="20%">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
import {ElContainer,ElAside,ElMain } from '@/../node_modules/element-plus'
export default { 
        components: {
            ElContainer,
            ElAside,
            ElMain
        },
}
</script>

<style>

</style>
<template>
  <div>
    <!-- 头部 -->
    <app-header />
    <el-container>
      <!-- 菜单 -->
      <sidebar class="sidebar-container" />
      <app-main />
    </el-container>
  </div>
</template>

<script>
import { AppHeader, AppMain, Sidebar } from './compnents'
export default {
  components: { AppHeader, AppMain, Sidebar }
}
</script>

<style>

</style>

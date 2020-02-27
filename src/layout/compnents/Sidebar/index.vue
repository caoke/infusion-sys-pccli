<template>
  <el-menu
    :default-active="activeMenu"
    class="el-menu-vertical-demo"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="variables.menuActiveText"
    :collapse-transition="false"
    @open="handleOpen"
    @close="handleClose"
  >
    <sidebar-item v-for="route in menuData" :key="route.path" :item="route" :base-path="route.path" />
  </el-menu>

</template>

<script>
import variables from '@/style/variables.scss'
import SidebarItem from './SidebarItem'
import { constantRoutes } from '@/router'
export default {
  components: { SidebarItem },
  computed: {
    variables() {
      return variables
    },
    menuData() {
      return constantRoutes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },
  methods: {
    handleOpen() {

    },
    handleClose() {

    }
  }
}
</script>

<style lang="scss" scoped>
.el-aside{
  background: #333333;
}
</style>

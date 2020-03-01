<template>
  <div class="area">
    <el-form ref="form" :model="form" :inline="true">
      <el-form-item label="区域名称">
        <el-input v-model="form.areaName" placeholder="区域名称" />
      </el-form-item>
      <el-button type="success" class="el-icon-search">查询</el-button>
      <el-button type="primary" class="el-icon-circle-plus-outline" @click="add">新增</el-button>
    </el-form>
    <el-table :data="tableData" class="table-warpper">
      <el-table-column label="序号" prop="index" />
      <el-table-column label="区域名称" prop="areaName" />
      <el-table-column label="科室" prop="person" />
      <el-table-column label="操作人" prop="updateBy" />
      <el-table-column label="操作时间" prop="updatetime" />
      <el-table-column label="操作" />
    </el-table>
    <el-pagination
      :total="page.total"
      :current-page="page.currentPage"
      :page-size="page.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>

<script>
import page from '@/mixins/page'
export default {
  mixins: [page],
  data() {
    return {
      form: {
        departName: ''
      },
      tableData: []
    }
  },
  methods: {
    add() {
      this.$emit('changeView', 'add')
    }
  }
}
</script>

<style lang="scss">

</style>

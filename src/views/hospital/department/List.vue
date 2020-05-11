<template>
  <div class="department">
    <el-form ref="form" :model="form" :inline="true">
      <el-form-item label="科室名称">
        <el-input v-model="form.name" placeholder="科室名称" />
      </el-form-item>
      <el-button type="success" class="el-icon-search" @click="search">查询</el-button>
      <el-button type="primary" class="el-icon-circle-plus-outline" @click="add">新增</el-button>
    </el-form>
    <el-table :data="tableData" class="table-warpper">
      <el-table-column label="科室名称" prop="name" />
      <el-table-column label="科室编号" prop="number" />
      <el-table-column label="负责人" prop="person" />
      <el-table-column label="科室电话" prop="phone" />
      <el-table-column label="是否可用" prop="isUsable" />
      <el-table-column label="操作人" prop="updateBy" />
      <el-table-column label="操作时间" prop="updateDate" />
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
import { getSectionController } from '@/api/api.js'

export default {
  mixins: [page],
  data() {
    return {
      form: {
        name: ''
      },
      tableData: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    add() {
      this.$emit('changeView', true)
    },
    getList() {
      getSectionController({ pageNo: this.page.currentPage, pageSize: this.page.pageSize })
        .then(res => {
          this.tableData = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    search() {
      this.page.currentPage = 1
      this.getList()
    }
  }
}
</script>

<style lang="scss">

</style>

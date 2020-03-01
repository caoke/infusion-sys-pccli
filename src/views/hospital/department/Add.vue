<template>
  <div class="department">
    <el-page-header content="新增科室" @back="goBack" />
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="科室名称">
        <el-input v-model="form.departmentName" placeholder="科室名称" />
      </el-form-item>
      <el-form-item label="科室编号">
        <el-input v-model="form.departmentNo" placeholder="科室编号" />
      </el-form-item>
      <el-form-item label="负责人">
        <el-input v-model="form.person" placeholder="负责人" />
      </el-form-item>
      <el-form-item label="科室电话">
        <el-input v-model="form.phone" placeholder="科室电话" />
      </el-form-item>
      <el-form-item label="是否可用">
        <el-select v-model="form.isUsable" placeholder="是否可用">
          <el-option value="是" />
          <el-option value="否" />
        </el-select>
      </el-form-item>
      <el-button type="primary">保存</el-button>
      <el-button type="primary">重置</el-button>

    </el-form>
  </div>
</template>

<script>
export default {
  name: 'DepartmentAdd',
  data() {
    return {
      form: {
        departmentName: '',
        departmentNo: '',
        person: '',
        phone: '',
        isUsable: '是'
      }
    }
  },
  methods: {
    goBack() {
      this.$emit('changeView', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-page-header{
    margin-bottom: 20px;
  }
  .el-form{
    max-width: 1200;
    margin: auto 50px;
    .el-input{
      width: 300px;
    }
  }
</style>

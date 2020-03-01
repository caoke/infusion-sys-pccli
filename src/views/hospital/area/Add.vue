<template>
  <div class="area">
    <el-backtop target=".main-container" />
    <el-page-header content="新增病区" @back="goBack" />
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="病区名称" prop="areaName">
        <el-select v-model="form.areaName" placeholder="病区名称">
          <el-option v-for="(area, index) in areaList" :key="index" :value="arae" />
          <el-option value="新增" />
        </el-select>
        <el-input v-if="form.areaName === '新增'" v-model="form.newName" placeholder="病区名称" />
      </el-form-item>
      <el-form-item label="科室" prop="departments">
        <el-checkbox-group v-model="form.departments">
          <el-checkbox
            v-for="(department,index) in departmentList"
            :key="index"
            :label="department"
            name="departments"
          />
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="床位序数" required>
        <el-input v-model="form.start" placeholder="开始" style="width: 100px;" /> 床
        -
        <el-input v-model="form.end" placeholder="结束" style="width: 100px;" /> 床
        <el-button type="primary" size="mini" @click="setList">对应床位</el-button>
      </el-form-item>
      <el-form-item label="床位信息" required>
        <el-table :data="list">
          <el-table-column label="床位号" prop="num">
            <template slot-scope="scope">
              <el-input v-model="scope.row.num" placeholder="床位号" />
            </template>
          </el-table-column>
          <el-table-column label="输液终端编号">
            <template slot-scope="scope">
              <el-input v-model="scope.row.shuye" placeholder="输液终端编号" />
            </template>
          </el-table-column>
          <el-table-column label="呼叫终端编号">
            <template slot-scope="scope">
              <el-input v-model="scope.row.hujiao" placeholder="呼叫终端编号" />
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <div class="btn-opts">
        <el-button type="primary">保存</el-button>
        <el-button type="primary">重置</el-button>
      </div>

    </el-form>

  </div>
</template>

<script>
export default {
  name: 'DepartmentAdd',
  data() {
    return {
      form: {
        areaName: '',
        newName: '',
        departments: [],
        start: '',
        end: ''
      },
      areaList: [],
      departmentList: ['内科', '外科', '骨科'],
      list: [],
      rules: {
        areaName: [
          { required: true, message: '请输入病区名称', trigger: 'blur' }
        ],
        departments: [
          { required: true, message: '请输入科室', trigger: 'change' }

        ]
      }

    }
  },
  methods: {
    goBack() {
      this.$emit('changeView', 'list')
    },
    setList() {
      this.list = []
      for (let i = this.form.start; i <= this.form.end; i++) {
        this.list.push({
          num: i,
          shuye: '',
          hujiao: ''
        })
      }
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
  .btn-opts{
    display: flex;
    justify-content: flex-end;
  }
</style>

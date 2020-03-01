
export default {

  data() {
    return {
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.page.currentPage = val
      // this.queryList()
    },
    handleSizeChange(val) {
      this.pageSize = val
      // this.queryList()
    }

  }
}

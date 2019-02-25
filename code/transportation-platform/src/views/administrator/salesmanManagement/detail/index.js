export default {
  name: 'factoryManagement',
  data () {
    return {
      isEdit: false,
      loading:false,
      name: '赵英俊',
      number: '123122333',
      area: '华东',
      provinceArea: '江苏，南京',
      factoryList: ['工厂一','工厂二'],
      blankRow: {

      },
      tableData:[
        {value1:'A'},
        {value1:'A'},
        {value1:'A'},
      ]
    }
  },
  created() {
  	let that = this
  },
  mounted() {

  },
  methods: {
    confirm () {
      let that = this
      that.$confirm('是否确定修改？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.isEdit = false
          that.$message({
            type: 'success',
            message: '修改成功!'
          });
        }).catch(() => {
          that.$message({
            type: 'info',
            message: '已取消修改'
          });          
        });
    },
  	edit() {
      let that = this
      that.isEdit  = true
    },
    addRow() {
      let that = this
      let newRow = JSON.parse(JSON.stringify(this.blankRow))
      that.tableData.unshift(newRow);
      //添加选中样式
      this.$refs.getTable.setCurrentRow(that.tableData[0])
    },
    deleteRow() {
      let that = this
    },
  }
}
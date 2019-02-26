export default {
  name: 'factoryManagement',
  data () {
    return {
      isEdit: false,
      tableData:[
        {value1:'A',value2:'江苏省',value3:'南京市',},
        {value1:'A',value2:'江苏省',value3:'南京市',},
        {value1:'A',value2:'江苏省',value3:'南京市',},
        {value1:'A',value2:'江苏省',value3:'南京市',}
      ],
      loading:false,
      currentPage:1,
      totalSize:20,
      page:{
        "pageNum":  0,
        "pageSize": 10
      },
      columnArr:[
        {label:'工厂名称',value:'value1'},
        {label:'省份',value:'value2'},
        {label:'地区',value:'value3'},
        {label: '添加图片',value:'value4'},
        {label: '操作',value:'value5'},
      ],
      factoryName:'某工厂',
      address:'',
      area:'',
      contact:'',
      contactInformation:'',
      fileList: [],
      blankRow: {},
    }
  },
  created() {
  	let that = this
  },
  mounted() {

  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
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
    handleCurrentChange(val) {
      let that = this
      that.page.pageNum = val
      that.getList()
    },
    getList() {
      let that = this
      // this.$global.doRequestResult(this.$config.url.drugPath, {
      //   "page": that.page,
      //   "params": {
      //     "classCode": "001001",
      //     "parentCode": ""
      //   },
      //   'path': 'drug_maintain:findDrugListByClass'
      // }, (resResult) => {
      //   that.tableData = resResult.result.data || []
      //   that.totalSize = resResult.result.totalSize
      // });
    },
    //限制图片上传大小
    beforeUpload(file) {        
        var testmsg=file.name.substring(file.name.lastIndexOf('.')+1) 
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 10     //这里做文件大小限制
        if (!isJPG && isPNG) {
          this.$message.error('上传图片只能是 JPG、PNG 格式!');
        }
        if(!isLt2M) {
          this.$message({
            message: '上传文件大小不能超过 10MB!',
            type: 'warning'
          });
        }
        return isJPG || isPNG && isLt2M
    }

  }
}
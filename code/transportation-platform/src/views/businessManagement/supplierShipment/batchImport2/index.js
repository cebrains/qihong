export default {
  name: 'newsDetail',
  data () {
    return {
      tableData:[
        {value1:'123',value2:'222',value3:'333',value4:'444',value5:'555',value6:'666'}
      ],
      loading:false,
      currentPage:1,
      totalSize:20,
      page:{
        "pageNum":  0,
        "pageSize": 10
      },
    }
  },
  components: {
  },
  created() {
  	let that = this
  },
  mounted() {
    let that = this
    //that.tableData = this.$store.state.excelData
  },
  methods: {
    //双击行跳转
    dbRowClick (row, event) {
      this.$router.push({
        path:'/businessManagement/supplierShipment/batchImport3',
        // query: {
        //   id: row.id
        // }
      });
    },
    handleCurrentChange(val) {
      let that = this
      that.page.pageNum = val
      that.getList()
    },
  }
}
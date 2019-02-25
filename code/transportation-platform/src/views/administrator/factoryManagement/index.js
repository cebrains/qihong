import inputExcel from '../../../components/uploadExcel/index.vue'
export default {
  name: 'factoryManagement',
  data () {
    return {
      searchText:'',
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
      	{label:'地区',value:'value3'}
      ]
    }
  },
  components: {
    inputExcel
  },
  created() {
  	let that = this
    that.refreshTable()
  },
  mounted() {

  },
  methods: {
    // getResult事件方法
    getMyExcelData(data) {
      //处理你的数据
        console.log(data)
    },
  	refreshTable() {
      let that = this
      this.loading = true
      setTimeout(()=>{that.loading = false},1500);
      that.getList()
    },
  	//搜索
  	search() {
      let that = this
      that.refreshTable()
    },
    //双击行跳转
    dbRowClick (row, event) {
      this.$router.push({
        path:'/administrator/factoryManagement/detail',
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
  }
}
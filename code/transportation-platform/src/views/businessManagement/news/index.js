export default {
  name: 'news',
  data () {
    return {
      searchText:'',
      tableData:[
      	{value1:'A',value2:'江苏省',value3:'logo.png',value4:1},
      	{value1:'A',value2:'江苏省',value3:'phone.png',value4:2},
      	{value1:'A',value2:'江苏省',value3:'phone.png',value4:3},
      	{value1:'A',value2:'江苏省',value3:'logo.png',value4:4}
      ],
      loading:false,
      currentPage:1,
      totalSize:20,
      page:{
        "pageNum":  0,
        "pageSize": 10
      },
      showAddnews: false
    }
  },
  components: {
  },
  created() {
  	let that = this
    that.refreshTable()
  },
  mounted() {
  },
  methods: {
  	//添加新的资讯
  	addNews() {
  		let that = this
  		this.$router.push({
        path:'/businessManagement/news/addNews',
        // query: {
        //   id: row.id
       	// }
   	  });
  	},
  	//点击图片名称查看大图
  	viewImg(row) {
  		let ida = 'id' + row.value4
  		document.getElementById(ida).style.display = 'block'
  	},
  	//关闭图片
  	closeImg(row) {
  		let ida = 'id' + row.value4
  		document.getElementById(ida).style.display = 'none'
  		debugger
  	},
  	refreshTable() {
      let that = this
      this.loading = true
      setTimeout(()=>{that.loading = false},1500);
      that.getList()
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
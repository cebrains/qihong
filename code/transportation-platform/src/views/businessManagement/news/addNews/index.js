export default {
  name: 'newsDetail',
  data () {
    return {
      fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },
  components: {
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
import Header from "../../components/header/index.vue";
export default {
  name: 'home',
  components: {
  	Header
  },
  data () {
    return {
    }
  },
  methods: {
  	handleOpen(key, keyPath) {
	    console.log(key, keyPath);
	},
	handleClose(key, keyPath) {
	    console.log(key, keyPath);
	}
  }
}
import Vue from 'vue'
import Router from 'vue-router'
import factoryManagement from '@/views/administrator/factoryManagement/index.vue'
import salesmanManagement from '@/views/administrator/salesmanManagement/index.vue'
import businessManagement from '@/views/administrator/businessManagement/index.vue'
import supplierManagement from '@/views/administrator/supplierManagement/index.vue'
import complaintsAndSug from '@/views/administrator/complaintsAndSug/index.vue'

import factoryManagementDetail from '@/views/administrator/factoryManagement/detail/index.vue'
import salesmanManagementDetail from '@/views/administrator/salesmanManagement/detail/index.vue'
import home from '@/views/home/index.vue'
import login from '@/views/login/index.vue'

import news from '@/views/businessManagement/news/index.vue'
import supplierShipment from '@/views/businessManagement/supplierShipment/index.vue'
import factoryReceiptt from '@/views/businessManagement/factoryReceiptt/index.vue'
import supplierSettlement from '@/views/businessManagement/supplierSettlement/index.vue'
import supplierPrepayment from '@/views/businessManagement/supplierPrepayment/index.vue'

import addNews from '@/views/businessManagement/news/addNews/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // path: '/',
      // name: 'home',
      // component: home,
      // redirect:'/administrator/factoryManagement',

      path: '/',
      name: 'home',
      component: home,
      redirect:'/businessManagement/news',
     
      // path: '/',
      // name: 'login',
      // component: login,
      children:[
      	{
	      path: '/administrator/factoryManagement',
	      name: 'factoryManagement',
	      component: factoryManagement
	    },{
	      path: '/administrator/salesmanManagement',
	      name: 'salesmanManagement',
	      component: salesmanManagement
	    },{
	      path: '/administrator/businessManagement',
	      name: 'businessManagement',
	      component: businessManagement
	    },{
	      path: '/administrator/supplierManagement',
	      name: 'supplierManagement',
	      component: supplierManagement
	    },{
	      path: '/administrator/complaintsAndSug',
	      name: 'complaintsAndSug',
	      component: complaintsAndSug
	    },{
	      path: '/administrator/factoryManagement/detail',
	      name: 'factoryManagementDetail',
	      component: factoryManagementDetail
	    },{
	      path: '/administrator/salesmanManagement/detail',
	      name: 'salesmanManagementDetail',
	      component: salesmanManagementDetail
	    },{
	      path: '/businessManagement/news',
	      name: 'news',
	      component: news
	    },{
	      path: '/businessManagement/supplierShipment',
	      name: 'supplierShipment',
	      component: supplierShipment
	    },{
	      path: '/businessManagement/factoryReceiptt',
	      name: 'factoryReceiptt',
	      component: factoryReceiptt
	    },{
	      path: '/businessManagement/supplierSettlement',
	      name: 'supplierSettlement',
	      component: supplierSettlement
	    },{
	      path: '/businessManagement/supplierPrepayment',
	      name: 'supplierPrepayment',
	      component: supplierPrepayment
	    },{
	      path: '/businessManagement/news/addNews',
	      name: 'addNews',
	      component: addNews
	    }
      ]
    },
  ]
})

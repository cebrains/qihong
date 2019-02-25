<template>
  <div class="home">
    <!-- <Header></Header> -->
    <div class="common-content clearfix">
      <div class="content-left">
        <el-row class="tac">
          <el-col :span="12">
            <!-- <el-menu
              default-active="/administrator/factoryManagement"
              :router=true
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-menu-item index="/administrator/factoryManagement">
                <i class="icon1 common-icon"></i>
                <span slot="title">工厂管理</span>
              </el-menu-item>
              <el-menu-item index="/administrator/salesmanManagement">
                <i class="icon2 common-icon"></i>
                <span slot="title">业务员管理</span>
              </el-menu-item>
              <el-menu-item index="/administrator/businessManagement">
                <i class="icon3 common-icon"></i>
                <span slot="title">业务一部管理</span>
              </el-menu-item>
              <el-menu-item index="/administrator/supplierManagement">
                <i class="icon4 common-icon"></i>
                <span slot="title">供应商管理</span>
              </el-menu-item>
              <el-menu-item index="/administrator/complaintsAndSug">
                <i class="icon5 common-icon"></i>
                <span slot="title">投诉与建议</span>
              </el-menu-item>
            </el-menu> -->
            <el-menu
              default-active="/businessManagement/news"
              :router=true
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-menu-item index="/businessManagement/news">
                <i class="icon6 common-icon"></i>
                <span slot="title">资讯</span>
              </el-menu-item>
              <el-menu-item index="/businessManagement/supplierShipment">
                <i class="icon7 common-icon"></i>
                <span slot="title">供应商发货管理</span>
              </el-menu-item>
              <el-menu-item index="/businessManagement/factoryReceiptt">
                <i class="icon8 common-icon"></i>
                <span slot="title">工厂收货管理</span>
              </el-menu-item>
              <el-menu-item index="/businessManagement/supplierSettlement">
                <i class="icon9 common-icon"></i>
                <span slot="title">供应商结算管理</span>
              </el-menu-item>
              <el-menu-item index="/businessManagement/supplierPrepayment">
                <i class="icon10 common-icon"></i>
                <span slot="title">供应商预付款管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="content-right">
        <div class="content-right-wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="less">
  @import url(./index.less);
</style>
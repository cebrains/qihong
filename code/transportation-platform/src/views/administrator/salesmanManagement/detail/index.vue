<template>
  <div class="management-common">
    <div class="factory-wrappper">
      <div class="factory-detail">
        <span class="factory-title">姓名:</span>
        <span class="factory-name" v-if='!isEdit'>{{name}}</span>
        <input type="text" v-else='isEdit' class="factory-input" @blur='confirm'>
        <img src="../../../../assets/images/edit.png" class="factory-edit" @click='edit'>
      </div>
      <div class="factory-detail">
        <span class="factory-title">手机号码:</span>
        <span class="factory-name" v-if='!isEdit'>{{number}}</span>
        <input type="text" v-else='isEdit' class="factory-input" @blur='confirm'>
        <img src="../../../../assets/images/edit.png" class="factory-edit" @click='edit'>
      </div>
      <div class="factory-detail">
        <span class="factory-title">负责区域:</span>
        <span class="factory-name">{{area}}</span>
      </div>
      <div class="factory-detail">
        <span class="factory-title">负责省份地区:</span>
        <span class="factory-name">{{provinceArea}}</span>
      </div>
    </div>
    <div class="table-wrapper" style="height:calc(100% - 180px)">
      <div class="title-bar clearfix">
        <div style="float: right;">
              <div class="primary-btn" @click='addRow'>新增</div>
          </div>
      </div>
        <el-table
          :data="tableData"
          v-loading.fullscreen.lock="loading"
          ref='getTable'
          class='main-table'
          height='calc(100% - 100px)'
          highlight-current-row>
          <el-table-column
            label="收货工厂"
            prop='value1'
            width="auto">
          </el-table-column>
          <el-table-column
            label="操作"
            prop='value2'
            width="auto">
            <template slot-scope="scope">
              <div class="table-todo">
                <div class="primary-btn white">删除</div>
              </div>
            </template>
          </el-table-column>
      </el-table>
      <div class="btn-wrapper">
        <div class="primary-btn" style="width: 150px">重置账号密码</div>
        <div class="primary-btn white" style="width: 150px">删除用户</div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style>
  @import url('./index.less');
</style>
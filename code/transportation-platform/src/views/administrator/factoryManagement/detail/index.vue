<template>
  <div class="management-common">
    <div class="factory-wrappper">
      <div class="factory-detail">
        <span class="factory-title">工厂名称:</span>
        <span class="factory-name" v-if='!isEdit'>{{factoryName}}</span>
        <input type="text" v-else='isEdit' class="factory-input" @blur='confirm'>
        <img src="../../../../assets/images/edit.png" class="factory-edit" @click='edit'>
      </div>
      <div class="factory-detail">
        <span class="factory-title">地址:</span>
        <span class="factory-name" v-if='!isEdit'>{{address}}</span>
        <input type="text" v-else='isEdit' class="factory-input" @blur='confirm'>
        <img src="../../../../assets/images/edit.png" class="factory-edit" @click='edit'>
      </div>
      <div class="factory-detail">
        <span class="factory-title">地区:</span>
        <span class="factory-name">{{area}}</span>
      </div>
      <div class="factory-detail">
        <span class="factory-title">联系人:</span>
        <span class="factory-name" v-if='!isEdit'>{{contact}}</span>
        <input type="text" v-else='isEdit' class="factory-input" @blur='confirm'>
        <img src="../../../../assets/images/edit.png" class="factory-edit" @click='edit'>
      </div>
      <div class="factory-detail">
        <span class="factory-title">联系方式:</span>
        <span class="factory-name" v-if='!isEdit'>{{contactInformation}}</span>
        <input type="text" v-else='isEdit' class="factory-input" @blur='confirm'>
        <img src="../../../../assets/images/edit.png" class="factory-edit" @click='edit'>
      </div>
    </div>
    <div class="table-wrapper">
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
          height='calc(100% - 80px)'
          highlight-current-row>
          <el-table-column
            label="工厂名称"
            prop='value1'
            width="auto">
          </el-table-column>
          <el-table-column
            label="省份"
            prop='value2'
            width="auto">
          </el-table-column>
          <el-table-column
            label="地区"
            prop='value3'
            width="auto">
          </el-table-column>
          <el-table-column
            label="添加图片"
            prop='value4'
            width="auto">
            <template slot-scope="scope">
              <div class="table-add-picture">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  :before-upload='beforeUpload'
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <div class='add-btn'>+</div>
                </el-upload>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            prop='value5'
            width="auto">
            <template slot-scope="scope">
              <div class="table-todo">
                <div class="primary-btn white">删除</div>
                <div class="primary-btn">编辑</div>
              </div>
            </template>
          </el-table-column>
      </el-table>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size=page.pageSize
          layout="prev, pager, next, jumper"
          :total=totalSize
          class='table-pagination' v-if='totalSize > page.pageSize'>
        </el-pagination>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style>
  @import url('./index.less');
</style>
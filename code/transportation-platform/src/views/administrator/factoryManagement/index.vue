<template>
  <div class="management-common">
    <div class="todo-bar clearfix">
      <div class="search-bar">
        <input v-model="searchText" placeholder="查找工厂" class='primary-input' @keyup.enter="search">
        <div class='primary-btn' @click='search'>搜索</div>
        <!-- 调用批量导入 -->
        <inputExcel @getResult="getMyExcelData"></inputExcel>
      </div>
      <div class="primary-btn white" style="width: 100px;float: right;">+ 添加工厂</div>
    </div>
    <div class="table-wrapper">
        <el-table
          :data="tableData"
          v-loading.fullscreen.lock="loading"
          ref='getTable'
          class='main-table'
          height='calc(100% - 80px)'
          highlight-current-row
          @row-dblclick='dbRowClick'>
          <el-table-column
            :label="item.label"
            :prop='item.value'
            v-for='(item,index) in columnArr'
            :key='index'
            width="auto">
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
<template>
  <div class="management-common" style="padding-top: 30px">
    <div class="table-wrapper" >
        <el-table
          :data="tableData"
          v-loading.fullscreen.lock="loading"
          class='main-table'
          height='calc(100% - 80px)'
          highlight-current-row
          @row-dblclick='dbRowClick'>
          <el-table-column
            label="供应商名称"
            prop='value1'
            width="auto">
          </el-table-column>
          <el-table-column
            label="到货日期"
            prop='value2'
            width="auto">
          </el-table-column>
          <el-table-column
            label="发货日期"
            prop='value3'
            width="auto">
          </el-table-column>
          <el-table-column
            label="工厂"
            prop='value4'
            width="auto">
          </el-table-column>
          <el-table-column
            label="车号"
            prop='value5'
            width="auto">
          </el-table-column>
          <el-table-column
            label="操作"
            prop='value6'
            width="auto">
              <template slot-scope="scope">
                <div class="primary-btn">修改
                <!-- <span @click='viewImg(scope.row)' class="imgA">{{scope.row.value3}}</span>
                <div :id="'id' + scope.row.value4" class="mask" style="display: none;" @click.stop='closeImg(scope.row)'>
                  <div class="closeImg" @click='closeImg(scope.row)'></div>
                  <img :src="require('../../../assets/images/' + scope.row.value3)" class="viewImg" @click='viewImg(scope.row)'>
                </div> -->
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
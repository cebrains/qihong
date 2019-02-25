<template>
  <div class="management-common">
    <div class="todo-bar clearfix">
      <div class="primary-btn white" style="width: 100px;float: right;" @click='addNews'>+ 添加资讯</div>
    </div>
    <div class="table-wrapper">
        <el-table
          :data="tableData"
          v-loading.fullscreen.lock="loading"
          ref='getTable'
          class='main-table'
          height='calc(100% - 80px)'
          highlight-current-row>
          <el-table-column
            label="资讯名称"
            prop='value1'
            width="auto">
          </el-table-column>
          <el-table-column
            label="资讯链接"
            prop='value2'
            width="auto">
          </el-table-column>
          <el-table-column
            label="图片"
            prop='value3'
            width="auto">
            	<template slot-scope="scope">
                	<div>
				      	<span @click='viewImg(scope.row)' class="imgA">{{scope.row.value3}}</span>
				      	<div :id="'id' + scope.row.value4" class="mask" style="display: none;" @click.stop='closeImg(scope.row)'>
				      		<div class="closeImg" @click='closeImg(scope.row)'></div>
				      		<img :src="require('../../../assets/images/' + scope.row.value3)" class="viewImg" @click='viewImg(scope.row)'>
				      	</div>
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
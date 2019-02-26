<template>
  <div class="management-common">
    <div class="add-wrapper">
      <!-- 调用批量导入 -->
      <inputExcel @getResult="getMyExcelData" v-on:listName="listName1"></inputExcel>
      <ul class="import-list">
        <li class="title-li">导入的收货列表</li>
        <li class="excel-li" v-for='item in  this.$store.state.excelData'>
          <span></span>
          {{item.name}}
        </li>
        <li class="excel-li-nodata" v-if='this.$store.state.excelData.length == 0'>暂无数据</li>
      </ul>
      <div class="primary-btn" style="margin-left: calc(80% - 68px);margin-top: 30px;" @click='confirmBtn'>确认</div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style>
  @import url('./index.less');
</style>
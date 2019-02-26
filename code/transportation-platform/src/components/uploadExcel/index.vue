<template>
  <span>
    <input style="display: none;" class="input-file" type="file" @change="exportData"  
    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
    <button @click="btnClick" class="primary-btn white" style="float: right;width: 100px">批量上传</button>
  </span>
</template>
<script src="./index.js"></script>
<style>
  @import url('./index.less');
</style>
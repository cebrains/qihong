<template>
  <span>
    <input class="input-file" type="file" @change="exportData"  
    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
    <div @click="btnClick" class="primary-btn">批量导入</div>
  </span>
</template>
<script src="./index.js"></script>
<style>
  @import url('./index.less');
</style>
<template>
  <div class="management-common">
    <div class="add-wrapper">
      <div class="add-content">
        <div class="add-bar">
          <span>资讯名称</span>
          <input type="text" class="add-input">
        </div>
        <div class="add-bar">
          <span>资讯链接</span>
          <input type="text" class="add-input">
        </div>
        <div class="add-bar">
          <span>图片</span>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList2"
            list-type="picture">
            <div class="primary-btn white">上传图片</div>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>

        </div>
      </div>
      <div class="add-btn clearfix">
        <div class="primary-btn" style="float: right;">确认发布</div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style>
  @import url('./index.less');
</style>
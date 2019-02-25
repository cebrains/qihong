/**
 * @version:                2018.12.26
 * @createTime:             2018.12.26
 * @updateTime:             2018.12.26
 * @author:                 houyusi
 * @description             config.js ,所有的配置文件
 *                          详细说明看注释  !important
 */

import { Loading } from 'element-ui'
import fetch from './fetch.js';
import Vue from 'vue'

if(!window.$vue){
  window.$vue = Vue.prototype;
}

let loading

let needLoadingRequestCount = 0;

//在字符串的左边填充一些特定的字符
String.prototype.lpad = function(len, s) {
  var a = new Array(this);
  for ( var i = 0; i < len; i++) {
    a.unshift(s);
  }
  return a.join("");
}
//在字符串的右边填充一些特定的字符
String.prototype.rpad = function(len, s) {
  var a = new Array(this);
  var n = (len - this.length);
  for ( var i = 0; i < n; i++) {
    a.push(s);
  }
  return a.join("");
}

/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * 例子：
 * (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 * (new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 */
Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,                 //月份
    "d+": this.getDate(),                    //日
    "h+": this.getHours(),                   //小时
    "m+": this.getMinutes(),                 //分
    "s+": this.getSeconds(),                 //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds()             //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

export default {
  getLocalPath(isAbsUrl) {
    var curWwwPath = window.location.href;
    var pathName = window.location.pathname;
    var pos = curWwwPath.indexOf(pathName);
    var localhostPath = curWwwPath.substring(0, pos);
    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
    return isAbsUrl ? (localhostPath + projectName + '/') : '';
  },
  openMessage(_this,htmlDom) {
    _this.$msgbox({
      title: '消息',
      message: htmlDom,
      showCancelButton: true,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      beforeClose: (action, instance, done) => {
        if (action === 'confirm') {
          instance.confirmButtonLoading = true;
          instance.confirmButtonText = '执行中...';
          setTimeout(() => {
            done();
            setTimeout(() => {
              instance.confirmButtonLoading = false;
            }, 300);
          }, 3000);
        } else {
          done();
        }
      }
    }).then(action => {
      _this.$message({
        type: 'info',
        message: 'action: ' + action
      });
    });
  },
  // localStorage
  // 储存storage
  saveLocalStorage : function (name, value) {
    localStorage.setItem(name, value);
  },
  // 查找storage
  findLocalStorage : function (str) {
    var requestStr = localStorage.getItem(str);
    return requestStr;
  },
  // 删除storage
  deleteLocalStorage : function (str) {
    localStorage.removeItem(str);
  },
  //sessionStorage
  // 储存storage
  saveSessionStorage : function (name, value) {
    sessionStorage.setItem(name, value);
  },
  // 查找storage
  findSessionStorage : function (str) {
    var requestStr = sessionStorage.getItem(str);
    return requestStr;
  },
  // 删除storage
  deleteSessionStorage : function (str) {
    sessionStorage.removeItem(str);
  },
  //  获取url中的参数
  getUrlParams: function () {
    var  _url=window.location.href;
    // 问号的位置
    var _questionPlace=_url.indexOf('\?');
    var  _data=false;
    if(_questionPlace!=-1){
      //  截取字符串
      _data=_url.substr(_questionPlace+1);
      // 对字符串进行解密
      _data=decodeURIComponent(_data);
      //获取数据对象
      _data=JSON.parse(_data);
    }
    return  _data;
  },
  //uuid  随机生成32位id
  generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid.toUpperCase().split('-').join('');
  },
  showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
      this.startLoading();
    }
    needLoadingRequestCount++;
  },
  tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return
      needLoadingRequestCount--;
    if (needLoadingRequestCount === 0) {
      this.endLoading();
    }
  },
  startLoading() {
    loading = Loading.service({
      lock: true,
      text: '拼命加载中……',
      background: 'rgba(255, 255, 255, 0.8)'
    })
  },
  endLoading() {
    loading.close();
  },
  //封装ajax调用，结果处理写在callback中
  doHttpRequestResult(reqUrl, param, callback) {
    fetch({
      url: reqUrl,
      method: window.$vue.$config.methodPost,
      data: param,
      loading:false
    }).then(res => {
      callback(res);
    }, (res) => {
      // 响应错误回调

    });
  },
  //封装ajax调用，结果处理写在callback中
  doRequestResult(reqUrl, param, callback, responsePath, responseParam) {
    let that = this;
    fetch({
      url: reqUrl,
      method: window.$vue.$config.methodPost,
      data: param,
      loading:false
    }).then(res => {
      // 响应成功回调
      let requestId = res.requestId;
      if(!requestId){
        window.$vue.$message(res.message);
        return;
      }
      //计数并封装返回结果
      let resResult = {times: 1, result: null};
      let intervalId = setInterval(function(){
        that.getIntervalResponseResult(requestId, resResult, intervalId, callback, responsePath, responseParam);
      }, window.$vue.$config.reqMaxMs);
    }, (res) => {
      // 响应错误回调
    });
  },
  //获取结果请求，最多重复reqMaxTimes次
  getIntervalResponseResult(requestId, resResult, intervalId, callback, responsePath, responseParam) {
    let resPath = responsePath ? responsePath : window.$vue.$config.url.resPath;
    fetch({
      url: resPath + requestId,
      method: window.$vue.$config.methodPost,
      data: responseParam,
      loading:false
    }).then(res => {
      resResult.times++;
      // 响应成功回调
      resResult.result = res.items;
      if (res.code == 0) {
        resResult.status = 0;//执行成功
        clearInterval(intervalId);
        callback(resResult);
      }
      else if (res.code != 1) {
        clearInterval(intervalId);
        window.$vue.$message(res.message);
      }
      else if(resResult.times > config.reqMaxTimes){
        clearInterval(intervalId);
        window.$vue.$message(res.message);
      }
    }, (res) => {
      // 响应错误回调
      clearInterval(intervalId);
    });
  },
  getData(id, arr) {
    var childArr = this.getParentArr(id, arr);
    if (childArr.length > 0) {
      childArr.forEach(item => item.children = this.getData(item.id, arr));
    }
    return childArr;
  },
  getParentArr(id, arr) {
    var newArr = new Array();
    for (var i in arr) {
      if (arr[i].parentId == id)
        newArr.push(arr[i]);
    }
    return newArr;
  },
  log(type, name){
    let loginUser = window.$vue.$store.state.login.loginUserInfo
    let userLog = {};
    userLog.operateType = type;
    userLog.operateName = name;
    userLog.userName = loginUser.userName;
    userLog.loginName = loginUser.loginName;
    userLog.hospitalCode = loginUser.orgId;
    userLog.userId = loginUser.id;
    userLog.operateTime = (new Date()).format("yyyy-MM-dd hh:mm:ss");

    window.$vue.$global.doRequestResult(window.$vue.$config.url.sysPath, {
      params: userLog,
      path: "system_user_log:userLog"
    }, function (resResult) {

    });
  },
  hasPermission(menuUrl, callback){
    let status = false;
    window.$vue.$global.doHttpRequestResult(window.$vue.$config.url.hasPermission, { menuUrl: menuUrl }, function (res) {
      if(res.items.value > 0){
        status = true;
      }
      if(!status){
        window.$vue.$message("抱歉，您没有权限访问该页面，请联系管理员！");
      }
      callback(status);
    });
  },
  encode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode('0x' + p1);
      }));
  },
  decode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }
}
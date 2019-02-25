/**
 * @version:                2018.12.26
 * @createTime:             2018.12.26
 * @updateTime:             2018.12.26
 * @author:                 houyusi
 * @description             config.js ,所有的配置文件
 *                          详细说明看注释  !important
 */

function getLocalPath(isAbsUrl) {
  var curWwwPath = window.location.href;
  var pathName = window.location.pathname;
  var pos = curWwwPath.indexOf(pathName);
  var localhostPath = curWwwPath.substring(0, pos);
  var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
  return isAbsUrl ? (localhostPath + projectName + '/') : '';
}
//  获取项目绝对地址，传入false，那么就是相对地址
var localPath = getLocalPath(true);
//  根目录文件夹  目前json数据的存放只能在static中  后期研究一下任何地方都可以防止的方法
var rootFolder = 'src/renderer/json/';

var config = {
  //serverUrlBaseUrl: "http://model.rxthinking.com/restapi/",
  //serverUrlBaseUrl: "http://localhost:8080/",
  serverUrlBaseUrl: "http://192.168.0.129:8080/",
  isDebug: false, //  是否是调试模式，true 为json数据，false为服务器数据
  methodGet: 'get', // ajax查询方式   get
  methodPost: 'post', // ajax查询方式  post
  url: {}, //  url链接,也就是数据的地址
  showLog: false, // 是否显示日志
  dirJsPath: rootFolder + 'js/', //js直接路径
  dirCssPath: rootFolder + 'css/', //css直接路径
  dirJsonPath: rootFolder + 'json/', //json直接路径
  dirComponents: '@/components/', //插件的根路径
  dirHtmlPath: rootFolder + 'html/', //html直接路径
  reqMaxTimes: 15,//最大请求次数
  reqMaxMs: 1000,//最大请求一次毫秒数,
  ENUMS_OPERATE_TYPE: {
    LOGIN: '1',
    LOGOUT: '2',
    MENU_CLICK: '3',
    SEARCH: '4'
  }

};
//这里配置服务器的地址  当然可以定义服务器的基础地址
var serverUrl = {
  resPath: config.serverUrlBaseUrl + 'api/res/',
  sysPath: config.serverUrlBaseUrl + 'api/req/v1/system',
  loginUrl: config.serverUrlBaseUrl + 'user/login',
  logout: config.serverUrlBaseUrl + 'user/logOut',
  isTimeout: config.serverUrlBaseUrl + 'user/isTimeout',
  hasPermission: config.serverUrlBaseUrl + 'user/hasPermission',
};
config.url = config.isDebug ? localPath : serverUrl;

export default config


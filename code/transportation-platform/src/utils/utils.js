
export default class utils {

  /**
   * 保留小数位数
   * @param str:数字 n:保留小数位数
   * @returns 处理后的数字
   */
  static changeDecimal(str, n) {
    var f_x = parseFloat(str);
    if (isNaN(f_x)) {
      return false;
    }
    var y = Math.pow(10,n);
    var f_x = Math.round(str * y) / y;
    var s_x = f_x.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
      pos_decimal = s_x.length;
      if(n > 0){
        s_x += '.';
      }
    }
    while (s_x.length <= pos_decimal + n && n > 0) {
      s_x += '0';
    }
    return Number(s_x);
  }

  static ENUMS_OPERATE_TYPE = {
    LOGIN: '1',
    LOGOUT: '2',
    MENU_CLICK: '3',
    SEARCH: '4'
  }


  //获得字符串实际长度，中文2，英文1
  static getStrRealLen(str) {
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
      charCode = str.charCodeAt(i);
      if (charCode >= 0 && charCode <= 128) realLength += 1;
      else realLength += 2;
    }
    return realLength;
  }

}



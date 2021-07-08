/**
 * 判断是否是Base64格式的字符串
 * @param {*} s
 */
 export function isBase64(s) {
  let reg = /^(([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=))|(([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==))$/;
  return reg.test(s);
}

/**
 * 邮箱
 * @param {*} s
 */
export function isEmail(s) {
  let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
  return reg.test(s)
}

/**
 * 合法uri
 * @param {*} textval
 */
export function isURL(textval) {
  let urlregex = /^(https[s]|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile(s) {
  let reg = /^(0|86|17951)?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9]|14[57]|(166))[0-9]{8}$/;
  return reg.test(s)
}

/**
 * 电话号码
 * @param {*} s
 */
export function isPhone(s) {
  let reg = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
  return reg.test(s)
}

/**
 * 小写字母
 * @param {*} s
 */
export function isLowerCase(s) {
  let reg = /^[a-z]+$/;
  return reg.test(s)
}

/**
 * 大写字母
 * @param {*} s
 */
export function isUpperCase(s) {
  let reg = /^[A-Z]+$/;
  return reg.test(s)
}

/**
 * 英文和汉字
 * @param {*} s
 */
export function isResidents(s) {
  let reg = /^[\u4E00-\u9FA5A-Za-z]+$/;
  return reg.test(s)
}

/**
 * 整数
 * @param {*} s
 */
export function isInteger(s) {
  let reg = /^\+?[1-9][0-9]*$/;
  return reg.test(s)
}

/**
 * 判断是否为空
 */
export function isNull(val) {
  // 特殊判断
  if (val && parseInt(val) === 0) return false;
  var list = ['$parent'];
  if (val instanceof Date || typeof val === 'boolean' || typeof val === 'number') return false;
  if (val instanceof Array) {
    if (val.length === 0) return true;
  } else if (val instanceof Object) {
    val = (0, _util.deepClone)(val);
    list.forEach(function (ele) {
      delete val[ele];
    });
    for (var o in val) {
      return false;
    }
    return true;
  } else {
    if (val === 'null' || val == null || val === 'undefined' || val === undefined || val === '') {
      return true;
    }
    return false;
  }
  return false;
}

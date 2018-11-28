/**
 * 手机号码校验.
 * @constructor tmsMobileValidate
 * @param {string} mobile - 手机号.
 * @returns {boolean}
 */
export const tmsMobileValidate = mobile => {
    if (!mobile) return;
    if (mobile.length === 11) mobile = mobile.replace(/(^\d{3}|\d{4}\B)/g, '$1-');
    return mobile;
};

/**
 * 字母(不区分大小写)加数字校验.
 * @constructor tmsAlphanumericValidate
 * @param {string} code - 字符串.
 * @returns {boolean}
 */
export const tmsAlphanumericValidate = code => {
    const RegNumcode = new RegExp(/^[0-9A-Za-z]+$/);
    if (!code) return;
    return !RegNumcode.test(code);
};

/**
 * 纯数字校验.
 * @constructor tmsNumberValidate
 * @param {string} num - 字符串.
 * @returns {boolean}
 */
export const tmsNumberValidate = num => {
    const RegNumber = new RegExp(/^[0-9]+$/);
    if (!num) return;
    return !RegNumber.test(num);
};

/**
 * 纯字母 (大小写不区分)校验.
 * @constructor tmsLetterValidate
 * @param {string} char - 字符串.
 * @returns {boolean}
 */
export const tmsLetterValidate = char => {
    const RegLetter = new RegExp(/^[A-Za-z]+$/);
    if (!char) return;
    return !RegLetter.test(char);
};

/**
 * 去掉字符串中所有空格(包括中间空格)
 * @constructor tmsClearTrim
 * @param {string} params - 字符串.
 * @param {string} global- g
 * @returns {string}
 */
export const tmsClearTrim = (params, global) => {
    let result;
    result = params.replace(/(^\s+)|(\s+$)/g, '');
    if (global.toLowerCase() == 'g') {
        result = result.replace(/\s/g, '');
    }
    return result;
};

/**
 * 回退上一级
 * @constructor tmsBack
 */
export const tmsBack = () => {
    window.history.back();
};

/**
 * [GetUrlParam description] 获取url 参数值
 * @type {[type]} URL 参数地址
 */
export const GetUrlParam = paraName => {
    var url = document.location.toString();
    var arrObj = url.split('?');
    if (arrObj.length > 1) {
        var arrPara = arrObj[1].split('&');
        var arr;
        for (var i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split('=');

            if (arr != null && arr[0] == paraName) {
                return arr[1];
            }
        }
        return '';
    } else {
        return '';
    }
};

/**
 * 设置 cookie
 * @constructor tmsSetCookie
 * @param {string} name - key值.
 * @param {string} value  -val值
 * @param {string} seconds -过期时间
 */
export const tmsSetCookie = (name, value, seconds) => {
    let expires = '',
        date;
    //seconds有值就直接赋值，没有为0。
    seconds = seconds || 0;
    if (seconds != 0) {
        //设置cookie生存时间
        date = new Date();
        date.setTime(date.getTime() + seconds * 1000);
        expires = '; expires=' + date.toGMTString();
    }
    //转码并赋值
    document.cookie = name + '=' + escape(value) + expires + '; path=/';
};

/**
 * 获取cookie
 * @constructor tmsGetCookie
 * @param {string} name - key值.
 */
export const tmsGetCookie = name => {
    let nameEQ = name + '=';
    //把cookie分割成组
    let ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            //判断一下字符串有没有前导空格
            //有的话，从第二位开始取
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            //如果含有我们要的name
            //解码并截取我们要值
            return unescape(c.substring(nameEQ.length, c.length));
        }
    }
    return '';
};

/**
 * 清除 cookie
 * @constructor tmsClearCookie
 * @param {string} name - key值.
 */
export const tmsClearCookie = name => {
    tmsSetCookie(name, '', -1);
};

/**
 * 获取url参数
 * @constructor tmsGetParameterByName
 * @param {string} name - key值.
 */
export const tmsGetParameterByName = name => {
    const match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.href);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
};

/**
 * 新增 localStorage
 * @constructor tmsAddLocalItem
 * @param {string} name - key值.
 * @param {string} value - value值.
 */
export const tmsAddLocalItem = (name, value) => {
    let v = JSON.stringify(value);
    localStorage.setItem(name, v);
};

/**
 * 获取 localStorage
 * @constructor tmsGetLocalItem
 * @param {string} name - key值.
 * @returns {null || array}
 */
export const tmsGetLocalItem = name => {
    let v = localStorage.getItem(name);
    return v == undefined ? null : JSON.parse(v);
};

/**
 * 清除 localStorage
 * @constructor tmsRemoveLocalItem
 * @param {string} name - key值.
 */
export const tmsRemoveLocalItem = name => {
    localStorage.removeItem(name);
};

/**
 * 新增 sessionStorage
 * @constructor tmsAddSessionItem
 * @param {string} name - key值.
 * @param {string} value - value值.
 */
export const tmsAddSessionItem = (name, value) => {
    let v = JSON.stringify(value);
    sessionStorage.setItem(name, v);
};

/**
 * 获取 sessionStorage
 * @constructor tmsGetSessionItem
 * @param {string} name - key值.
 * @returns {null || array}
 */
export const tmsGetSessionItem = name => {
    let v = sessionStorage.getItem(name);
    return v == undefined ? null : JSON.parse(v);
};

/**
 * 清除 removeSession
 * @constructor tmsRemoveSessionItem
 * @param {string} name - key值.
 */
export const tmsRemoveSessionItem = name => {
    sessionStorage.removeItem(name);
};

/**
 * 数组 通过下标删除数据
 * @constructor remove
 * @param {number} num - 数组下标index.
 */
Array.prototype.remove = function(num) {
    var index = this.indexOf(num);
    if (index > -1) {
        this.splice(index, 1);
    }
};

/**
 * 时间格式化
 * @constructor Format
 * @param {string} fmt -转化模版(yyyy-MM-dd hh:mm:ss)
 */
Date.prototype.format = function(fmt) {
    let timeObj = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (let k in timeObj) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? timeObj[k] : ('00' + timeObj[k]).substr(('' + timeObj[k]).length));
        }
    }
    return fmt;
};

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
 * 去除字符串中的空格(包括中间空格)
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
export const tmsGetUrlParam = name => {
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
 * 前端生成文件并下载
 * @DateTime 2019-01-12T16:05:38+0800
 * @version                           1.0
 * @param    {[type]}                 fileName :文件名称
 * @param    {[type]}                 content 内容
 * @return   {[type]}                  生成一段 json文本的下载
 */
export const tmsCreateAndDownloadFile = (fileName, content) => {
    const aTag = document.createElement('a');
    const blob = new Blob([content]);
    aTag.download = `${fileName}.json`;
    aTag.href = URL.createObjectURL(blob);
    aTag.click();
    URL.revokeObjectURL(blob);
};

/**
 * iOS，Safari移动端浏览器，input等表单focus后fixed元素错位问题
 * @DateTime 2019-01-12T16:09:21+0800
 * @version                           1.0
 * @param    {[type]}                 /iPhone|iPod|iPad/i.test(navigator.userAgent) [description]
 * @return   {[type]}                                                               [description]
 */
export const tmsElementDislocation = () => {
    if (/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
        $(document).on('focus', 'input, textarea', function() {
            $('header').css('position', 'absolute');
            $('footer').css('position', 'absolute');
        });

        $(document).on('blur', 'input, textarea', function() {
            $('header').css('position', 'fixed');
            $('footer').css('position', 'fixed');
        });
    }
};

/**
 * 判断数据类型
 * @param    {[any]}                 params [description]
 * @return   {[boolean]}                     [返回值]
 */
export const tmsGetType = params => {
    var typeArray = Object.prototype.toString.call(params).split(' ');
    return typeArray[1].slice(0, -1);
};
/**
 * 数组对象深度拷贝
 * @Author   TaiMie
 * @DateTime 2019-01-31T17:40:09+0800
 * @version                           1.0
 * @param    {[array | object]}                 params [接收参数]
 * @return   {[array |object]}                        [返回参数]
 */
export const tmsDeepCopy = params => {
    return JSON.parse(JSON.stringify(params));
};

/**
 * 获取页面高度
 * @Author   TaiMie
 * @DateTime 2019-01-12T16:22:19+0800
 * @version                           1.0
 * @return   {[type]}                 [description]
 */
export const tmsGetPageHeight = () => {
    var g = document,
        a = g.body,
        f = g.documentElement,
        d = g.compatMode == 'BackCompat' ? a : g.documentElement;
    return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
};
/**
 * 获取页面可视宽度
 * @Author   TaiMie
 * @DateTime 2019-01-12T16:22:26+0800
 * @version                           1.0
 * @return   {[type]}                 [description]
 */
export const tmsGetPageViewWidth = () => {
    var d = document,
        a = d.compatMode == 'BackCompat' ? d.body : d.documentElement;
    return a.clientWidth;
};
/**
 * 获取页面宽度
 * @Author   TaiMie
 * @DateTime 2019-01-12T16:22:31+0800
 * @version                           1.0
 * @return   {[type]}                 [description]
 */
export const tmsGetPageWidth = () => {
    var g = document,
        a = g.body,
        f = g.documentElement,
        d = g.compatMode == 'BackCompat' ? a : g.documentElement;
    return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
};

//从全局捕获错误
// window.onerror = function (errMsg, scriptURI, lineNumber, columnNumber, errorObj) {
//     setTimeout(function () {
//         var rst = {
//             "错误信息：": errMsg,
//             "出错文件：": scriptURI,
//             "出错行号：": lineNumber,
//             "出错列号：": columnNumber,
//             "错误详情：": errorObj
//         };
//         console.log(JSON.stringify(rst, null, 10));
//     });
// };

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

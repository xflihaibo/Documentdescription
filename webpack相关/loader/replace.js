module.exports = code => {
    // console.log(  code);
    // console.log( typeof code);
    code = code.replace(/"-:/g, `changeLanguage("`).replace(/:- "/g, `")`);
    return code;
};
//中英文翻译

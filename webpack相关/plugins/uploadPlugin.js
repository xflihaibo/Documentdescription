const qiniu = require('qiniu');
const path = require('path');
const fs = require('fs');
//异步plugin
class UploadPlugin {
    constructor(options = {}) {
        let {bucket = '', domain = '', accessKey = '', secretKey = ''} = options;
        let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
        let putPolicy = new qiniu.rs.PutPolicy({scope: bucket});
        this.uploadToken = putPolicy.uploadToken(mac);
        let config = new qiniu.conf.Config();
        this.formUploader = new qiniu.form_up.FormUploader(config);
        this.putExtra = new qiniu.form_up.PutExtra();
    }
    apply(compiler) {
        compiler.hooks.afterEmit.tapPromise('UploadPlugin', (compilation, cb) => {
            let assets = compilation.assets;
            let promises = [];
            Object.keys(assets).forEach(filename => {
                promises.push(this.upload(filename));
            });
            return Promise.all(promises);
            cb();
        });
    }
    upload(filename) {
        let localFile = path.resolve(__dirname, '../../mechanism', filename);
        return new Promise((resolve, reject) => {
            this.formUploader.putFile(this.uploadToken, filename, localFile, this.putExtra, function(respErr, respBody, respInfo) {
                if (respErr) {
                    throw respErr;
                }
                if (respInfo.statusCode == 200) {
                    resolve();
                }
            });
        });
    }
}

module.exports = UploadPlugin;

//异步plugin
class FileListPlugin {
    constructor({filename}) {
        this.filename = filename;
    }
    apply(compiler) {
        compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, cb) => {
            console.log(compilation.assets);
            let assets = compilation.assets;
            let content = '## 文件名       资源大小      \n\r';
            Object.entries(assets).forEach(([name, stateobj]) => {
                content += `- ${name}         ${stateobj.size()}  \n\r`;
            });
            assets[this.filename] = {
                source() {
                    return content;
                },
                size() {
                    return content.length;
                }
            };
            cb();
        });
    }
}

module.exports = FileListPlugin;

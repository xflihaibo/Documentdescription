//异步plugin
class AsyncPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('AsyncPlugin', (compilation, cb) => {
            setTimeout(() => {
                console.log('\n\r wait....for you!!!!');
                cb();
            }, 1000);
        });
    }
}

module.exports = AsyncPlugin;

class DonePlugins {
    apply(compiler) {
        compiler.hooks.done.tap('DonePlugins', stats => {
            console.log('done');
        });
    }
}

module.exports = DonePlugins;

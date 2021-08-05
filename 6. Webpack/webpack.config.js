const path = require('path');

module.exports = {
    mode:"production", // 設定 development code 不會壓縮
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader','css-loader'] // 對檔案類型套用這個 loader ，這要用 regular expression
        }
    ]
    }
}
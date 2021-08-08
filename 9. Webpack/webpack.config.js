const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development", // 設定 development code 不會壓縮
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
    },
    module: {
        rules: [
        // {
        //     test: /\.css$/i,
        //     use: ['style-loader','css-loader'] // 對檔案類型套用這個 loader ，這要用 regular expression
        // }, 
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env']
        }
      }
        }, {
            test: /\.s[ac]ss$/i,
            use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader", 
            ],
        },
    ]
    },
    plugins: [new HtmlWebpackPlugin()]
}
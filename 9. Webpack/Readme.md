## 安裝
``` powershell
npm install webpack webpack-cli --save-dev
```

約定俗成會開個資料夾，叫做src

``` powershell
npx webpack
```

慣例上入口點會是 ./src 裡面的 index.js ，可以看 package.json
``` json
{
  "name": "6.-webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.48.0",
    "webpack-cli": "^4.7.2"
  }
}
```
### 設定檔
webpack.config.js

```javascript
const path = require('path');

module.exports = {
    mode:"production", // 設定 development code 不會壓縮
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}

```

### Webpack 除了 javascript 還有 各種檔案類型的 loader

``` powershell
npm install --save-dev css-loader
npm install --save-dev style-loader
```

原理是把 css 當作字串，然後動態把字串放到 style 裡面


### 安裝 Babel Loader
``` powershell 
npm install -D babel-loader @babel/core @babel/preset-env webpack
```

### 把 babel 的設定放到 rules 裡面
```  javascript
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```

### 安裝 Sass Loader

``` powershell
npm install sass-loader sass webpack --save-dev
```

### 把 sass loader 放到 rules 裡面
``` javascript
 {
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
```


## 如何不用每次都自己下 compile 指令 - devServer

### 安裝 webpack-dev-server
``` powershell
npm install --save-dev webpack-dev-server
```
### 設定
``` javascript 
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
```

### 設定輸出 html

``` powershell
npm install --save-dev html-webpack-plugin
```
### 設定 HtmlWebpackPlugin 到 webpack.config.js 
這樣會自動生成一個 html 檔在 dev-server 的時候也有東西可以接
``` javascript
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
    ]
    },
    plugins: [new HtmlWebpackPlugin()]
}
```
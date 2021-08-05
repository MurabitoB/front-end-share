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
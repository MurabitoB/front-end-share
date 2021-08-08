# 安裝

``` powershell
npm install --save-dev postcss postcss-cli
```

## 設定 postcss.config.js
``` javascript
module.exports = {
  plugins: [
    // tailwindcss 也是一個 plugin 喔
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
```

## 安裝編譯器
``` powershell
npm install --save-dev autoprefixer
```

編譯
``` powershell
npx postcss src/*.css --use autoprefixer -d ./dist
```
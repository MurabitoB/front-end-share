# 安裝方式
```
npm install --save-dev @babel/core @babel/cli
```

在 package.json 裡面加入編譯的選項

``` json
  {
    "name": "my-project",
    "version": "1.0.0",
+   "scripts": {
+     "build": "babel src -d dist"
+   },
    "devDependencies": {
      "@babel/cli": "^7.0.0"
    }
  }
```

由於預設沒有做設定，如果要 compile 出轉換過的語法，要寫 .babelrc 的 config 檔
為了方便 demo 我們就抓個 preset 的設定檔
``` powershell
npm install @babel/preset-env --save-dev
```

``` json
{
    "presets": ["@babel/preset-env"] // babel 預設的設定
}
```


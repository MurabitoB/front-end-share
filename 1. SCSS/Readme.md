# 如果要能夠編譯 sass 檔案

請輸入 

``` powershell
npm install -g sass
```

輸入以下指令可以觀看 sass 版本
``` powershell
sass --version 
```

如果要個別編譯檔案請輸入
``` powershell
sass 'filename.scss' 'output.css'
```

如果你想要自動偵測變化自動輸出的話
``` powershell 
sass --watch 'filename.scss' 'output.css'
```

如果你想設定輸出資料夾並同時自動編譯
``` powershell
sass --watch ./src:./dist
```
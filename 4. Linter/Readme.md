# 安裝 ESLint 
``` powershell
npm install eslint --save-dev
```
# 起始化 ESLint
``` powershell
npx eslint --init
```

# 修復 不符合 coding style 的程式碼

### VSCODE 需要安裝 ESlint 的 highlight 套件
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

### 將 commad 加入到 package.json

``` json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint --fix --ext .js ."
  },
```
# Gulp 是幹嘛的?

讓你把一堆任務流水線化

## 安裝 

``` powershell
npm install --save-dev gulp
```

### 在根目錄新增 gulpfile.js 的檔案


``` javascript 
// gulp 內建的物件
const {src, dest} = require('gulp')

function defaultTask() {
    
}

exports.default = defaultTask;
```

安裝 babel 支援
``` powershell
npm install --save-dev gulp-babel @babel/core @babel/preset-env
```

安裝 scss 支援
``` powershell
npm install sass gulp-sass --save-dev
```

安裝 sourceMap 支援
``` powershell
npm install sass gulp-sourcemaps --save-dev
```

安裝 uglify 支援
``` powershell
npm install --save-dev gulp-uglify
```

安裝 rename 支援
``` powershell
npm install --save-dev gulp-rename
```

安裝 css minify 支援
``` powershell
npm install gulp-clean-css --save-dev
```

安裝 post css 支援
``` powershell
npm install --save-dev postcss gulp-postcss
npm install --save-dev autoprefixer
```
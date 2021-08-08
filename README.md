## 環境說明
1. 安裝 [node.js](https://nodejs.org/en/) 最新版本
2. 安裝完後，要進每個資料的 demo 後請都先下 ```npm install ``` 的指令，這樣會自動把該資料夾裡面相依的模組都抓下來

## 專案簡介
### 1. SCSS
這個資料夾展示了前端 CSS Preprocessor 的一些 Feature。

既有的 CSS 很難維護，而且也很難以程式化的方式去建構，為了應變複雜的需求，勢必得在既有的功能上做擴充，但是又為了瀏覽器兼容性的問題，所以就要有一套機制把一些新的未來可能支援也可能不支援的 Feature 轉換成既有瀏覽器也能支援的形式。

例如在 css 中寫迴圈、變數、function(mixin)，還有透過 & 來繼承 parent 的名稱，還有用 scoped 來做到 A B 同時成立才套用的樣式。

### 2. Babel 
這個資料夾展示了 javascript compiler 所能做到的功能，Babel 是 React 所對應的 javascript compiler ，他可以把 javascript **語法** 匯出到指定的版本，例如 ES6 => ES5。

 必須要注意的是，他針對的是語法而不是 function，如果是函式支援度問題需要透過 3. Polyfill 來解決。

``` javascript
// ES6 的語法
()=>{
    console.log('Hello,World!')
}
----- 透過 Babel 轉換 --------
function(){
    console.log('Hello,World!)
}
```

### 3. Polyfill

這個資料夾展示了 Polyfill 的功能，因為不同的瀏覽器之間有不同的函式支援度，我們可以透過修改 function 的 prototype 的方式來做到讓函式在每個瀏覽器都能夠得到支援，例如 ```String.replaceAll('','')```。

在 IE 的 javascript string 預設只支援 replace 的函式，他的功能會取代欲替換的第一個字元，但如果要一次取代所有字元就要用到 String.replaceAll() 函式，在 chrome, safari 都有支援這個函式。

這個專案主要是 demo 透過使用 polyfill 來達成讓 IE 也支援 String.replaceAll() 這個函式。

polyfill 並不單純只是個函式庫，他同時也可以透過設定來讓 javascript 輸出的過程自動根據需求靜態輸出必要的 polyfill，也就是說，他可以掃描程式碼並根據需求導入必要的語法，並不會讓專案過於膨脹。

### 4. Linter

前端框架在開新專案的時候就會導入 ESLint 或 TSlint 的檔案，這個設定檔是為了做到程式碼的掃描，來讓不符合規範的程式碼被轉換成符合規範。

例如，如果團隊規範禁止使用 ```var``` 來宣告， ESLint 就可以幫忙轉換成 let 或者 const，此外， VSCode 也可以透過安裝插件的方式來解析 ESLint 或 TSLint 的 Config 檔，這樣就可以在編輯器階段就能夠知道自己的程式碼有沒有遵循團隊的規範，如果有問題也會透過 intellisense 的方式詢問開發者要不要 auto fix，是個很方便的工具。


### 5. PostCSS

既然有了 CSS Preprocessor 了，為什麼我們還要 PostCSS 這東西呢？

其實，CSS Preprocessor 只能把擴充的功能轉換成正常的 CSS，他只能解決的是CSS語法兼容的問題，但是 CSS 的瀏覽器兼容問題並沒有被解決，有一些 CSS 的 Feature 在被列為正式標準之前，就已經先被其他瀏覽器實現了，他們會透過該瀏覽器限定的屬性來實現，為了輸出這些瀏覽器支援的屬性，我們就需要使用到 PostCSS 這個插件。

### 6. Pug

既然 CSS 能以程式化的方式被建構，那麼 Html 可不可以呢？ 

答案是有的！

透過 Pug 這種工具，就可以以很簡短的方式寫 html tag，此外也支援 mixin， 這跟先前 scss 所提到的 mixin 是很類似的東西，能夠透過定義函式、參數化的方式輸出樣板的 html tag。

### 7. Yarn 

你有沒有想過 npm install 指令下去等了老半天都還沒抓完？

yarn 是個現代前端開發 npm 之外的另一個前端套件管理工具，跟 npm 之間都吃相同的設定檔，但是導入模組的速度更快！

從 npm 轉移到 yarn 的過程可以說相當無痛！

### 8. Gulp

當你發現前面有這麼工具的時候，就會遇到一個問題：
    
    如果我要一個一個設定這些工具一定很麻煩，難道就沒辦法一個指令就完成前面的所有工作嗎？

這時候就要透過 Gulp 來解決，Gulp 是一個任務管理工具， Gulp 本身並沒有任何前面所有工具的任何功能，而是透過插件的方式將前面的功能與 Gulp 做連結，所以在這個專案中你會看到```package.json```的 Dependency 裡面包含了前面和後面用到的套件。

在 Gulp 的設定檔中，我們可以定義一套工作流水線，來將處理過的檔案 buffer 起來，並交往下一道產線，

例如：

我今天想要將 SCSS 輸出成 CSS 同時產生對應的 Source map 檔，而且這個 CSS 還有經由 PostCSS 的轉換，如果是這個過程，就至少要經歷兩條 Command 。

此外我也想要透過 Babel 轉換 javascript 並透過 PolyFill 來避免輸出的程式碼在其他瀏覽器跑不起來，這過程也需要至少兩條 Command。

還有，今天因為我為了想要少寫一些 html ，所以我決定使用 Pug ，來做為我開發的選項，那我每次修改 Pug 都還要再下一次指令來輸出 html。

光是前面這些步驟就花了我五條指令，而且上述的步驟還沒有做到程式碼的 minify (壓縮)和 uglify(雜亂化)，來縮短 request 所需的時間。

要是每個指令每次都要自己下，肯定會做到死，所以我們可以透過 gulp 把上述的過程給流水線化，並自動觀察檔案變化，只要檔案一有異動，gulp 就會啟動流水線，把該做的任務都完成掉。


### 9. Webpack


<h2>簡介</h2>
簡單的餐廳清單，目的是讓使用者查詢並挑選餐廳

<h2>基本功能</h2>

使用者可以在首頁看到所有餐廳與它們的簡單資料：
餐廳照片
餐廳名稱
餐廳分類
餐廳評分

使用者可以再點進去看餐廳的詳細資訊：
類別
地址
電話
描述
圖片

使用者可以透過搜尋餐廳名稱及種類 來找到特定的餐廳
在搜尋欄內輸入關鍵字，按下Search鍵可以搜尋餐廳 搜尋後關鍵字依然會顯示在搜尋欄內

<h2>環境建置</h2>
開發環境 Visual Studio Code 
執行環境 Node.js 
框架 Express.js
模板引擎 Express-handlebars
實用套件 Nodemon

<h2>專案安裝流程</h2> 
打開你的 terminal，Clone 此專案至本機電腦 git clone https://github.com/Xuan1106/restaurant_list.git
進入專案資料夾 cd restaurant_list
安裝 npm 套件 npm install
安裝 nodemon 套件 (若未安裝) npm install -g nodemon
啟動伺服器，執行 app.js 檔案 nodemon app.js
當終端機出現以下字樣，表示啟動完成 Express server is listening on localhost:3000
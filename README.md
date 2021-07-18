<h2>簡介</h2>
簡單的餐廳清單，目的是讓使用者查詢並挑選餐廳

<h2>基本功能</h2>

使用者可以在首頁看到所有餐廳與它們的簡單資料：<br>
餐廳照片、餐廳名稱<br>
餐廳分類、餐廳評分<br>

使用者可以再點進去看餐廳的詳細資訊：<br>
類別、地址、電話、描述、圖片

使用者可以透過搜尋餐廳名稱及種類 來找到特定的餐廳<br>
在搜尋欄內輸入關鍵字，按下Search鍵可以搜尋餐廳 <br>
搜尋後關鍵字依然會顯示在搜尋欄內<br>

<h2>新增功能</h2>
使用者可以瀏覽所有餐廳<br>
使用者可以點擊任一餐廳，查看更多餐廳資訊，如地址、電話與簡介<br>
使用者可以依照中文名稱、英文名稱與餐廳類別進行搜尋<br>
使用者可以新增一家餐廳<br>
使用者可以編輯一家餐廳<br>
使用者可以刪除一家餐廳<br>


<h2>環境建置</h2>
開發環境 Visual Studio Code <br>
執行環境 Node.js <br>
框架 Express.js<br>
模板引擎 Express-handlebars<br>
實用套件 Nodemon<br>
資料庫 MongoDB <br>
圖形介面 Roto 3T<br>

<h2>專案安裝流程</h2> 
打開你的 terminal<br>
Clone 此專案至本機電腦 git clone https://github.com/Xuan1106/restaurant_list_crud.git<br>
進入專案資料夾 cd restaurant_list_crud<br>
安裝 npm 套件 npm install<br>
安裝 nodemon 套件 (若未安裝) npm install -g nodemon<br>
新增種子資料 npm run seed <br>
啟動伺服器，執行 app.js 檔案 nodemon app.js<br>
當終端機出現以下字樣，表示啟動完成 Express server is listening on localhost:3000<br>
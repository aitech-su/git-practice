# 1.dependencies 與 devDependencies 的區別

## 1.dependencies：
- 是你的應用程式在運行時所需要的庫和模組。這些會被安裝在生產環境。
## 2.devDependencies：
- 是開發過程中所需的依賴，例如測試框架或編譯工具。這些只會在開發環境中安裝。

# 2.scripts 區塊的用途

`scripts` 區塊允許你定義一系列可以在命令行執行的命令。例如：
```json
"scripts": {
  "start": "node app.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

- `npm start` 會執行 `node app.js`，這對於自動化啟動伺服器或運行其他命令非常有用。

#  3.環境變數指定port:

## 1.在app.js中寫:
```javascript
    const port = process.env.PORT || 3000;
```
## 2.啟動時輸入
- **Unix/Linux/MacOS** : PORT=5000 node app.js
- **Windows powershell** : 再研究看看

#  4.上傳檔案的議題:
## 1.應該上傳的檔案：
## package.json：包含專案所需的依賴項以及一些項目資訊。
## app.js 和其他程式碼檔案：這是你的應用程式邏輯。
## readme.md：說明文件，描述專案用途、如何運行等等。

## 2.不應該上傳的檔案：
## node_modules/：這個資料夾包含所有的依賴庫，但這些庫可以根據 package.json 重新安裝，沒必要上傳。
## .env：如果你使用 .env 檔案來存放敏感資訊（如資料庫憑證、API 金鑰等），應該加入 .gitignore 並避免上傳。
## .gitignore：這個檔案告訴 Git 哪些檔案不應該被上傳，一般會包括 node_modules/ 和其他臨時檔案。

# 5.CJS（CommonJS）和 ESM（ECMAScript Modules）的區別

## 1.CJS（CommonJS）：
- 使用 `require` 和 `module.exports`。
- 用於 Node.js 的模組系統，預設支援於 Node.js 中。

**範例**：
```javascript
const express = require('express'); // 引入模組
module.exports = app; // 匯出模組
```

## 2.ESM（ECMAScript Modules）：
- 使用 `import` 和 `export`。
- ES6 標準，瀏覽器和現代 Node.js 支援。

**範例**：
```javascript
import express from 'express'; // 引入模組
export default app; // 匯出模組
```

## 3.如何選擇：
- 如果你需要兼容舊版 Node.js 或使用現有的 CJS 生態系統，建議使用 `require`。
- 如果你的項目主要使用現代 ES6+ 語法，則可以選擇使用 `import/export`。
### 使用 ES Modules 的注意事項 - 大綱筆記

1. **匯出與匯入 (Export and Import)**
   - **預設匯出 (`default export`)**：
     - 使用 `export default` 匯出主要函數或類別。
     - 匯入時不需要大括號。
   - **具名匯出 (`named export`)**：
     - 使用 `export { }` 匯出多個函數或變數。
     - 匯入時需使用大括號。

2. **ES Module 的檔案副檔名**
   - 使用 `.js` 副檔名需設定 `package.json` 中的 `"type": "module"`。
   - 若不修改 `package.json`，需將檔案副檔名改為 `.mjs`。

3. **HTML 引用 ES Modules**
   - 在 HTML 中引用模組時，需在 `<script>` 標籤中加上 `type="module"`。
     ```html
     <script type="module" src="main.js"></script>
     ```

4. **模組作用域**
   - 每個 ES Module 有自己的作用域，內部定義的變數和函數不會洩漏到全域範圍。

5. **Node.js 使用 ES Modules**
   - 若要使用 ES Modules，需設定 `package.json` 為 `"type": "module"`，或將檔案副檔名改為 `.mjs`。
   - 運行命令應對應正確的副檔名，例如：
     ```bash
     node main.mjs
     ```
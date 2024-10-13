1. [Public IP] (http://54.162.3.131)

2. Instance Type (EC2 主機): EC2 instance type 是 AWS 提供的不同配置的虛擬伺服器，它們提供不同的 CPU、記憶體、儲存和網路效能選項。
3. Nginx 是一個高效能的 HTTP 和反向代理伺服器。它可用於靜態網站托管、負載平衡和作為反向代理以處理來自客戶端的請求。
4. pm2 是 Node.js 的過程管理工具，用於管理和維護 Node.js 應用程式，使它們在崩潰後自動重啟並保持持續運行。
5. proxy 指的是將一個伺服器的請求轉發到另一個伺服器。在這裡使用 Nginx 作為反向代理是為了把客戶端的請求轉發到 Express 應用程式，這樣可以提高效能和安全性。
5.[補充] Reverse Proxy vs Forward Proxy: Reverse Proxy 是將客戶端的請求轉發到內部伺服器；Forward Proxy 則是客戶端透過代理伺服器訪問外部網路。
6. 把/etc/nginx/sites-available/default中的預設server區塊改成以下: 
    ``` nginx
    server {
        listen 80;
        listen [::]:80;

        server_name 54.162.3.131;  # 這裡替換為你的域名或伺服器 IP

        location / {
            proxy_pass http://localhost:3000;  # 將請求代理到 Express 應用程式
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    } 
    ```
7. Security Group 是 AWS 的虛擬防火牆，用於控制進出 EC2 實例的網路流量。設定原則包括允許所需的進出端口（如 80/443），並限制不必要的流量。
8. sudo 是一個允許用戶以超級使用者或其他使用者的身份執行命令的工具。有時需要 sudo 是因為某些操作需要更高的權限來執行系統層級的變更。
9. Nginx 的 Log 檔案位置: 通常位於 /var/log/nginx/ 目錄下，包含 access.log 和 error.log。可以用 tail -f /var/log/nginx/access.log 來即時查看log。
10. 剛建好虛擬機器時，無法從本地端ssh連線。後來把EC2 instance的key保存到本地資料夾某處後再把權限修改(必要)，就可以連上了。
11. refs:
[Instance-Type](https://www.youtube.com/watch?v=iHX-jtKIVNA) + ChatGPT<br>
[Nginx](https://www.explainthis.io/zh-hant/swe/why-nginx) + ChatGPT<br>
[PM2] https://ithelp.ithome.com.tw/articles/10220480 + https://github.com/Unitech/pm2 + ChatGPT<br>
[Proxy] ChatGPT<br>
[Security-Group] https://docs.aws.amazon.com/zh_tw/vpc/latest/userguide/vpc-security-groups.html + ChatGPT
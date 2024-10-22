1.  https://www.keplerbohr.xyz <br>
2. [GoDaddy](https://tw.godaddy.com/domains) <br>
3. DNS 的 A Record 是什麼？ <br>
        A Record（Address Record） 是 DNS 中的一種記錄，用於將一個網域名稱解析到其對應的 IPv4 位址。<br>
        例如，如果有一個網域名稱是 example.com，A 記錄可能會將其對應到 IP 位址 192.0.2.1。<br>
        當用戶在瀏覽器中輸入 example.com 時，DNS 會查詢該網域的 A 記錄來找到它對應的 IP 位址，然後用戶的瀏覽器就可以連接<br>到該 IP 所指向的伺服器。<br>
        A 記錄的格式：<br>
        ```
        example.com.   IN   A   192.0.2.1
        ```<br>
        A 記錄僅用於 IPv4 位址。若是 IPv6 位址，則需要使用 AAAA 記錄。<br>
4.  DNS 的 NS Record 是什麼？<br>
        NS Record（Name Server Record） 用於指定管理某個網域名稱的 名稱伺服器。<br>
        它告訴互聯網上其他的 DNS 伺服器，該去哪裡尋找某個網域的詳細 DNS 記錄，如 A 記錄、MX 記錄等。<br>
        一個網域通常會有多個 NS 記錄，以確保冗餘和穩定性。這樣，如果主名稱伺服器不可用，還有備援伺服器可以接管。<br>
        NS 記錄的格式：<br>
        ```
        example.com.   IN   NS   ns1.provider.com. <br>
        example.com.   IN   NS   ns2.provider.com.
        ```<br>
        這表示 example.com 的 DNS 查詢由 ns1.provider.com 和 ns2.provider.com 負責。<br>
5.  Domain Name vs FQDN vs URL 這三者分別為何？
    - Domain Name（網域名稱）：<br>

        網域名稱是互聯網上的一個名字，用來指向特定的網頁或服務。它是用來替代 IP 位址的一種更易記憶的方式。<br>
        例如，example.com 是一個網域名稱。<br>
        網域名稱可以有多層，包括頂級域（TLD）如 .com、次級域（如 example）、以及可能的子域名（如 www）。<br>
        
    - FQDN（Fully Qualified Domain Name，完全合格域名）：

        FQDN 是一個完整的網域名稱，它包含了所有的域層次信息，直到根域（.）。<br>
        它的結構通常是：主機名.子域名.頂級域名.，例如：www.example.com.。<br>
        FQDN 的最後一個點（.）代表 DNS 中的根域，不過這個點在日常使用中通常是隱藏的。<br>
        FQDN 用於精確標識互聯網上的某個資源。<br>

    - URL（Uniform Resource Locator，統一資源定位符）：<br>

        URL 是用來標識互聯網上資源的完整地址，它包含了協議、網域名稱或 IP、路徑和其他資訊。<br>
        例如，https://www.example.com/index.html 是一個 URL。<br>
        URL 的格式包含：<br>
        協議（Protocol）：如 http 或 https。<br>
        網域名稱或 IP 地址：如 www.example.com。<br>
        路徑（Path）：如 /index.html，指定了資源在伺服器上的位置。<br>

6. 為什麼應該要為網站加上憑證？而不是直接用 HTTP 就好？ <br>
    - 使用 SSL/TLS 憑證（HTTPS） 是為了加密網頁數據傳輸，提供更高的安全性和隱私保護。

# 資料來源 : <br>
    計算機網路課本: Computer Networking: A Top-Down Approach, 7th Edition

    ChatGPT(第五題)
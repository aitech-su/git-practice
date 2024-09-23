# Nodejs筆記
#### 我安裝的node版本為 v18.15.0 ,與nodejs有關的專有名詞
#### 有兩個,分別為nvm與npm。以下分別介紹兩者:
## NVM(node version manager):
### 如何使用:
####        用來在單台主機上管理不同版本的nodejs以及相關的npm套件而不發生衝突
### 常用指令:
####        1.nvm install <version>: 安裝特定nodejs版本 eg. nvm install 14.17.0
####        2.nvm use <version>: 切換至不同nodejs版本 eg. nvm use 16.10.0
####        3.nvm ls: 列出已安裝的nodejs版本
### 優勢: 
####        可以使得同一台主機上共存著使用不同nodejs版本的專案
## NPM(node package manager):
### 如何使用:
####        是預設的nodejs套件管理者,開發者可以下載、安裝和更新,npm和nodejs是配在一起的,
####        安裝nodejs時就會順便安裝npm了
### 常用指令:
####        1.npm install <package-name>: 安裝某個套件 eg. npm install express
####        2.npm install -g <package-name>: 全域地安裝某個套件 eg. npm install -g nodemon
####        3.npm -v: 查看安裝的npm版本
### 優勢:
####        1.管理專案中的套件相依
####        2.可以發布與和社群共享套件
####        3.NPM Regitry上存放著數以百計的套件,有些是公開的,有些是私有的,開發者可以自由地或受限地安裝,而不用造輪子        
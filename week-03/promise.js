function doJob(job, time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let now = new Date();
        resolve(`完成工作 ${job} at ${now.toISOString()}`);
      }, time);
    });
  }
  
  // 使用 Promise 來按順序執行工作
  let now = new Date();
  console.log(`開始工作 at ${now.toISOString()}`);
  
  doJob('刷牙', 1000)
    .then((data) => {
      console.log(data);
      return doJob('吃早餐', 3000);
    })
    .then((data) => {
      console.log(data);
      return doJob('寫功課', 1000);
    })
    .then((data) => {
      console.log(data);
      return doJob('吃午餐', 2000);
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error('錯誤:', err);
    });
  
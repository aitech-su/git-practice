function doJob(job, time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let now = new Date();
        resolve(`完成工作 ${job} at ${now.toISOString()}`);
      }, time);
    });
    // setTimeout(() => {
    //   let now = new Date();
    //   return(`完成工作 ${job} at ${now.toISOString()}`);
    // }, time);
  }
  
  // 使用 async/await 來簡化非同步流程
  async function performJobs() {
    let now = new Date();
    console.log(`開始工作 at ${now.toISOString()}`);
  
    try {
      const job1 = await doJob('刷牙', 1000);
      console.log(job1);
  
      const job2 = await doJob('吃早餐', 3000);
      console.log(job2);
  
      const job3 = await doJob('寫功課', 1000);
      console.log(job3);
  
      const job4 = await doJob('吃午餐', 2000);
      console.log(job4);
    } catch (err) {
      console.error('錯誤:', err);
    }
  }
  
  performJobs();
  
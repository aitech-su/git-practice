async function f1(){
    console.log("f1");
}

function f2(){
    console.log("f2");
}

async function f3(){
    console.log("f3");
}

async function f4(){
    await f3()
}

f4()
f1()
f2()
f3()

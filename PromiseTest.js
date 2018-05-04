'use strict'
/*var promiseTest = new Promise((resolve,reject)=>{
    setTimeout(()=> {
        resolve("VSE OKEY!");
    }, 1);
});

promiseTest
.then(
    result => {console.log(result)},
    error =>{console.log(error)}

);*/


const check = (status)=>{
    return new Promise((resolve,reject)=>{
        if(status > 100){
            resolve("Succeed!");
        }
        else {
            reject(new Error('Erorr!'));
        }
    });
}



check(50).then(
    resolve => { console.log(resolve) },
    reject => { console.log(reject) }
);



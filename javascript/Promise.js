// let objName= new Promise(callback function)
let promise = new Promise((resolve, reject) => {
    let marks = 52;
    if (marks >= 90) {
        setTimeout(() =>{resolve("A New Laptop")}, 
         4000)
    } else  {
        setTimeout(() => {reject("pitashree award")},1000 )
    }
})
// how to use promise
// console.log(promise)
promise.then((msg)=>console.log(msg)).catch((err)=>console.log(err)
)
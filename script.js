// let str = "hello this is a string" 

// // split method is used to split a string to array..
// let a = str.split(" ");

// for(let i in a){
//     console.log(a[i]); 
// }

// // webscraping --- to extract any content and store it.
// // setinterval
// // settimeout

// a = setInterval(()=>{
//     let date = new Date()
//     document.body.innerHTML = date.toLocaleTimeString();
// },(1000));

// // setTimeout(() => {
// //     console.log('done');
// // }, (2000));

// setTimeout(()=>{
//     console.log("callbacks")
// },2000)

////////////// error handling
// function fun1(a){
//     try{
//         if(isNaN(a)) throw "number only";
//         console.log(a)
//     }
//     catch(err){
//         console.log("must enter value...")
//     }
//     finally{
//         console.log("thanks for using")
//     }
// }
// fun1("uj");

///////////// promise

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let date = new Date();
        resolve(date.toLocaleTimeString());
    }, 2000)
})

array.forEach(element => {
    
});
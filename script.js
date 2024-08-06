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

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let date = new Date();
//         resolve(date.toLocaleTimeString());
//     }, 2000)
// })

// let arr = [1,4,5,2,6,2]
// console.log(arr.sort())
// let newarr = arr.map((e)=>{
//     return e*2;
// })

// console.log(newarr)

// it is use to filter some specific value of the array
let arr = [
    {
        name:"abc",
        age:20,
    },
    {
        name:"def",
        age:21,
    },
    {
        name:"ccc",
        age:20,
    }
];

let res = arr.filter((obj)=>{
    if(obj.age == 20){
        return obj;
    }
})
console.log(res);
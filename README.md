// webscraping --- to extract any content and store it.
// setinterval
// settimeout

a = setInterval(()=>{
    let date = new Date()
    document.body.innerHTML = date.toLocaleTimeString();
},(1000));

// setTimeout(() => {
//     console.log('done');
// }, (2000));


-callbacks-
callbacks functions are those functions which accepts another function as a arguement
function fun1(callback){};


error handling
error can be due to a wrong input
try---
it let us test the code of error
catch ---
to catch the error and handle
throw---
it throw the custom error
finally---
to execute the code even after getting any error in our code

function fun1(a){
    try{
        if(isNaN(a)) throw "number only";
        console.log(a)
    }
    catch(err){
        console.log("must enter value...")
    }
    finally{
        console.log("thanks for using")
    }
}
fun1("uj");

Promises
these are the adbance version of error handling
either resolve or reject


asynchronous programming
this means to able to do multi task at a single time
javascript promises are used to handle multiply asyn tasks.

API
it is use to extend the functinality of our programm
API is the acronym for application programming interface — a software intermediary that allows two applications to talk to each other. APIs are an accessible.

polyfill 
it means adding a feature to our desktop apps online..

we use promises to avoid callback hell


filter
filter is used to perform a specific task on a value of the array and return the value.

destructing of array/JSON
how to read the json from 
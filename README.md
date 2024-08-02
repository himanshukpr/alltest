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

let str = "hello this is a string" 

// split method is used to split a string to array..
let a = str.split(" ");

for(let i in a){
    console.log(a[i]); 
}

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


array.forEach(element => {
    
});
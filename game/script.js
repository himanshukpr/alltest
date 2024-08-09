
const size = 5; //number of the blocks
let board = document.querySelector(".board");

document.addEventListener("DOMContentLoaded",()=>{
    boardinit();
    mines()
})

const cells = [];

function boardinit() {
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            let box = document.createElement("button");
            box.setAttribute("class", "boxs");
            box.setAttribute("row", i);
            box.setAttribute("col", j);
            box.setAttribute("id", j);
            box.setAttribute("mine",false)
            box.setAttribute("show",false)
            box.addEventListener("click", ebtn)
            document.querySelector(".board").append(box);
            cells.push(box);
        }
    }
}
function ebtn() {
    let temp = this.getAttribute("mine")
    if(temp == "true"){
        return alert("marr gya tu");
    }
    console.log("hola")
    // this.setAttribute("show",true)
    // this.style.backgroundcolor = "red";
    // console.log(this.getAttribute("row"));
    // console.log(this.getAttribute("col"));
}


function mines() {
    let a = Math.floor(Math.random()*cells.length)
    cells[a].setAttribute("mine",true);
    console.log(a)
}
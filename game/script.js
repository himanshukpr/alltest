
const size = 5; //number of the blocks
let board = document.querySelector(".board");

document.addEventListener("DOMContentLoaded", () => {
    boardinit();
    mines()
    hscore = document.getElementById("h_score");
    hscore.innerHTML = localStorage.getItem("score");
    board.style.gridTemplateColumns = `repeat(${size},2fr)` ;
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
            box.setAttribute("mine", false)
            box.setAttribute("show", false)
            box.addEventListener("click", ebtn)
            document.querySelector(".board").append(box);
            cells.push(box);
        }
    }
}
function ebtn() {
    if (this.getAttribute("show") != "true") {
        let temp = this.getAttribute("mine")
        if (temp == "true") {

            this.style.background = "red";
            window.location.reload(true);
            return alert("marr gya tu");
        }
        document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML) + 1;

        if (parseInt(document.getElementById("score").innerHTML) >= parseInt(localStorage.getItem("score"))) {

            localStorage.setItem("score", document.getElementById("score").innerHTML);
        }

        this.setAttribute("show", true);
        this.style.background = "transparent";
        console.log("hola")
    }
}


function mines() {
    for (let i = 0; i < 2; i++) {
        let a = Math.floor(Math.random() * cells.length)
        cells[a].setAttribute("mine", true);
        // console.log(a)
    }
}
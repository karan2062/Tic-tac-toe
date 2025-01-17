let startBtn = document.querySelector(".start");
let resetBtn=document.querySelector(".restart")
let h2 = document.querySelector("h2");
let boxes = document.querySelectorAll(".boxes");
let h4 = document.querySelector("h4");
console.log(boxes);

startBtn.addEventListener("click", function () {
    h2.innerText = "game started"
    writting();
})

let turn = true;

function writting() {
    boxes.forEach((elem) => {
        elem.addEventListener("click", () => {
            if (elem.disabled) {
                return;
            }
            if (turn) {
                elem.innerText = "x";
                turn = false;
            }
            else {
                elem.innerText = "o";
                turn = true;
            }
            elem.disabled = true;
            winner();
        })
    })
}

let winnerPattern = [
    [0, 1, 2],  //horizonal
    [3, 4, 5], //horizonal
    [6, 7, 8], //horizonal
    [0, 3, 6], //vertical
    [1, 4, 7], //vertical
    [2, 5, 8], //vertical
    [0, 4, 8], //diagonal
    [2, 4, 6]  //diagonal
]

console.log(winnerPattern);

function winner() {
    winnerPattern.forEach((pattern) => {
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;
        if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
            if (pos1Value == pos2Value && pos2Value == pos3Value) {
                h4.innerText = `Winner =${pos1Value}`
                boxes.forEach((box) => {
                    box.disabled = true;
                })
            }
        }

    })
}

resetBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText='';
    })
    h4.innerText = `Show winner`
})
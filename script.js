let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset');
let newgamebtn = document.querySelector('#new');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');

let turnO = true;
const Winningpatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], 
    [1, 4, 7], [2, 4, 6], [2, 5, 8], 
    [3, 4, 5], [6, 7, 8]
];
const resetgame=()=>{
    turnO=true;
    enableAllBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === '') {
            if (turnO) {
                box.innerText = 'O';
                turnO = false;
            } else {
                box.innerText = 'X';
                turnO = true;
            }
            box.disabled = true;
          checkwinner();
        }
    });
});

const showwinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableAllBoxes();
};

const disableAllBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableAllBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

};
const checkwinner = () => {
    for (let pattern of Winningpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !== "" && pos2!="" && pos3!="") {
            if(pos1 === pos2 && pos2 === pos3){
            showwinner(pos1);
         }
       }
    }
};
newgamebtn.addEventListener("click",resetgame);

resetbtn.addEventListener("click",resetgame);
let board = [];
let rows;
let columns;
let flagCounter =0;
let currentMode;
let seconds = 0;
let interval;
const time = document.getElementById("time");
let revealedCount = 0;









function generateBoard(){
    let button1 = document.querySelector(".button4");
    let button2 = document.querySelector(".button5");
    let button3 = document.querySelector(".button6");

    button1.addEventListener("click", easyMode);
    button2.addEventListener("click", mediumMode);
    button3.addEventListener("click", hardMode);
    
        
    
}




function gameMode(newMode){
    const boardContainer = document.getElementById('board-container');
    boardContainer.classList.remove(currentMode);
    boardContainer.classList.add(newMode);
    currentMode = newMode;


}



function timer(){
    seconds++
    time.textContent = seconds;
    
    

}


function easyMode(){
    rows = 9;
     columns = 9;
     mines = 10;
     gameMode('easy-cells');
     

    for(let i = 0; i < rows; i++){
        let row = [];
        for(let j = 0; j <columns; j++){
            let cell = document.createElement('div');
            cell.id = i.toString() + "-" + j.toString();
            cell.addEventListener('click', function(){
                if(!interval){
                interval = setInterval(timer, 1000);
                }
            });
            
            cell.addEventListener('contextmenu', function(event){
                event.preventDefault();
                flagged(i,j, mines);
            });
            cell.addEventListener('click', function(){
                onclick(i,j);
            });
            
            document.getElementById("board-container").append(cell);
            row.push(cell);
        }
        board.push(row);
    }

    clearInterval(interval);
    interval = null;
    setMines("easy");
    console.log(board);
    



}

function mediumMode(){
     rows = 14;
     columns = 14;
     mines = 35;
     gameMode('medium-cells');
    

    for(let i = 0; i < rows; i++){
        let row = [];
        for(let j = 0; j <columns; j++){
            let cell = document.createElement('div');
            cell.id = i.toString() + "-" + j.toString();
            cell.addEventListener('click', function(){
                if(!interval){
                interval = setInterval(timer, 1000);
                }
            });
            clearInterval(interval);
            interval = null;
            cell.addEventListener('contextmenu', function(event){
                event.preventDefault();
                flagged(i,j, mines);
            });
            cell.addEventListener('click', function(){
                onclick(i,j);
            });
            cell.addEventListener('click', function(){
                checkClick(i,j);
            });
            document.getElementById("board-container").append(cell);
            row.push(cell);
        }
        board.push(row);
    }
    setMines("medium");
    console.log(board);
}

function hardMode(){
     rows = 18;
     columns = 18;
     mines = 50;
     gameMode('hard-cells');
     

    for(let i = 0; i < rows; i++){
        let row = [];
        for(let j = 0; j <columns; j++){
            let cell = document.createElement('div');
            cell.classList.remove('medium-cells');
            cell.classList.add('hard-cells');
            cell.id = i.toString() + "-" + j.toString();
            cell.addEventListener('click', function(){
                if(!interval){
                interval = setInterval(timer, 1000);
                }
            });
            clearInterval(interval);
            interval = null;
            cell.addEventListener('contextmenu', function(event){
                event.preventDefault();
                flagged(i,j, mines);
            });
            cell.addEventListener('click', function(){
                onclick(i,j);
            });
            cell.addEventListener('click', function(){
                checkClick(i,j);
            });
            document.getElementById("board-container").append(cell);
            row.push(cell);
           
        }
        board.push(row);
    }
    setMines("hard");
    console.log(board);


}


function setMines(difficulty){
    let numOfMines;
    
    if(difficulty === "easy"){
        numOfMines = 10;
    }
    else if(difficulty=== "medium"){
        numOfMines = 35;
    }

    else if(difficulty==="hard"){
        numOfMines = 50;   
    }

    let counter = 0;

    while(counter<numOfMines){
        const row = Math.floor(Math.random()*rows);
        const col = Math.floor(Math.random()*columns);

        if(board[row][col] !== 'mine'){
            board[row][col] = 'mine';
            counter++
            const cellElement = document.getElementById(row.toString() + "-" + col.toString());
      
        }
    }

}

function flagged(row, col, mines){

    let rightClickCell = board[row][col];
    let  getCell = document.getElementById(row.toString() + "-" + col.toString());
    

    if(rightClickCell.flagged){
        rightClickCell.flagged = false;
        getCell.innerText = '';
        flagCounter--;
        document.getElementById("flags").innerHTML = flagCounter;
        console.log(flagCounter);
        
    }
    else{
        if(flagCounter >= mines){
            return;
        }
        rightClickCell.flagged = true;
        getCell.innerText = 'flag';
        flagCounter++;
        document.getElementById("flags").innerText = flagCounter;
        console.log(flagCounter);
        
    }

    
}
function onclick(i,j){
    if(board[i][j] == 'mine'){
        alert("GAME OVER BOZO");
        return;

    }
    checkClick(i,j);
    
    

}
let numberOfMines = 0;
function checkClick(row, col){
    
    if(row < 0 || row >= rows || col < 0 || col >= columns){
        return;
    }
  
    
    const cellElement = document.getElementById(row.toString()+ "-" + col.toString());
    if(board[row][col] === 'revealed'|| board[row][col].flagged){
        return;
    }
    numberOfMines = neighbourMines(row,col);
    cellElement.style.backgroundColor = "black";
    cellElement.innerText = numberOfMines.toString();
    board[row][col] = 'revealed';
    revealedCount++;
    
    if (numberOfMines === 0) {
        for (let i = row - 1; i <= row + 1; i++) {
          for (let j = col - 1; j <= col + 1; j++) {
            if (i === row && j === col) {
              continue;
            }
            
            checkClick(i, j);
        }
        
    }

}

}


function neighbourMines(row,col){
    let counter = 0;
    for(let i = row-1; i<=row+1; i++){
        for(let j = col-1;j<=col+1; j++ ){
            if((i===row && j===col)|| rows-1<i || columns-1<j || i<0 || j<0) {
                continue;
            }
            console.log(i,j);
            if(board[i][j] ==='mine'){
                counter++
                console.log(counter)
            }
        }
    }
   
    return counter;
    }
    




    





// always start with minimum objects
const tetris = document.querySelector(".tetris");
const gameDiv = tetris.querySelector(".game");
const matrixForm = tetris.querySelector(".matrix-form");
const startBtn = matrixForm.querySelector(".startbtn");
/*
const matrixInput = matrixForm.querySelector("input");
*/
let matrix= [];
let rowMatrix= [];
let boxRowMatrix = [];
let boxMatrix = [];

/*
let cell = {
    'row': 0,
    'col': 0,
    'isFilled': false,
    'color': 0
    };

function makeRow(row) {
    for(let i=0; i<row; i++){
        const yLocation = matrix.length + 1;
        cell.row = yLocation;
        matrix.push(rowMatrix);
    }
    console.log(matrix);
}

function makeCol(col){
    //this is attribute of ecah cell in matrix
    for(let i=0; i<col; i++) {
        const xLocation = rowMatrix.length + 1;
        cell.col = xLocation;
        rowMatrix.push(cell);
    }
    console.log(rowMatrix);
}
*/
const boxIndexCheck = (matrix) => {
    let matrixColorArray = [];
    //search matrix
    for (let row=0; row<matrix.length; row++) {
        for (let col=0; col<matrix[row].length; col++){
            //condition
            if (matrix[row][col] !== 0){
                const matrixColorIndex = [row, col];
                matrixColorArray.push(matrixColorIndex);
            }
        }
    }
    return matrixColorArray;
}

const makeContainer = (row, col) => {
    for (let i=0; i<row; i++){
        for (let j=0; j<col; j++){
            const box = document.createElement("div");
            const rowString = i.toString();
            const colString = j.toString();
            const ROW = "row";
            const COL = "col"
            const rowRowString = ROW + rowString;
            const colColString = COL + colString;
            box.className = "box";
            box.classList.add(rowRowString);
            box.classList.add(colColString);
            gameDiv.appendChild(box);
        }
    }
}

const makeRow = (row) => {
    for(let i=0; i<row; i++){
        matrix.push(rowMatrix);
    }
    console.log(matrix);
}

const makeCol = (col) => {
    for (let i=0; i<col; i++){
        rowMatrix.push(0);
    }
}

function makeMatrix(row, col){
    makeCol(col);
    makeRow(row);
    makeContainer(row, col);
}

function handleSubmit(event){
    event.preventDefault();
    /* const currentValue = matrixInput.value;
    matrixInput.value = "";
    const currentValueList = currentValue.split(" ");
    const row = parseInt(currentValueList[0]);
    const col = parseInt(currentValueList[1]);
    */
   const row = 20;
   const col = 10;
    console.log(row, col);
    makeMatrix(row, col);
}

function init(){
    matrixForm.addEventListener("click",handleSubmit)
}
init();
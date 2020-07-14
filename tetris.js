// always start with minimum objects
const tetris = document.querySelector(".tetris");
const matrixForm = tetris.querySelector(".matrix-form");
const matrixInput = matrixForm.querySelector("input");

let matrix= [];
let rowMatrix= [];
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
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = matrixInput.value;
    matrixInput.value = "";
    const currentValueList = currentValue.split(" ");
    const row = parseInt(currentValueList[0]);
    const col = parseInt(currentValueList[1]);
    console.log(row, col);
    makeMatrix(row, col);
}

function init(){
    matrixForm.addEventListener("submit",handleSubmit)
}
init();
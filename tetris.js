// always start with minimum objects
const tetris = document.querySelector(".tetris");
const gameDiv = tetris.querySelector(".game");
const matrixForm = tetris.querySelector(".matrix-form");
const startBtn = matrixForm.querySelector(".startbtn");
const ROW = "row";
const COL = "col";
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
/*
after checker will be setted array after 3
*/
const clearBox = (row, col) => {
    const makeClass = makeClassname(row, col);
    const square = document.querySelector(`.${makeClass[0]}.${makeClass[1]}`);
    if (square.classList.contains("type1")){
        square.classList.remove("type1");
    }
    else if (square.classList.contains("type2")){
        square.classList.remove("type2");
    }
    else if (square.classList.contains("type3")){
        square.classList.remove("type3");
    }
    else if (square.classList.contains("type4")) {
        square.classList.remove("type4");
    }
}

const paintBox = (matrix, row, col) => {
    const makeClass = makeClassname(row, col);
    const square = document.querySelector(`.${makeClass[0]}.${makeClass[1]}`);
    if (matrix[row][col] === 1) {
        square.classList.add("type1");
    }
    else if (matrix[row][col] === 2) {
        square.classList.add("type2");
    }
    else if (matrix[row][col] === 3) {
        square.classList.add("type3");
    }
    else if (matrix[row[col]] === 4) {
        square.classList.add("type4");
    }
    }

const boxIndexCheck = (matrix) => {
    for (let row=0; row<matrix.length; row++) {
        for (let col=0; col<matrix[row].length; col++) {
            if (matrix[row][col] !== 0) {
                paintBox(matrix, row, col);
            }
            else {
                clearBox(row, col);
            }
        }
    }
}

const makeClassname = (row, col)=> {
    const rowString = row.toString();
    const colString = col.toString();
    const rowRowString = ROW + rowString;
    const colColString = COL + colString;
    return [rowRowString, colColString];
}

//make container with identifier row, col to class
const makeContainer = (row, col) => {
    for (let i=0; i<row; i++){
        for (let j=0; j<col; j++){
            const box = document.createElement("div");
            const makeClass = makeClassname(i, j);
            box.className = "box";
            box.classList.add(makeClass[0]);
            box.classList.add(makeClass[1]);
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
   //first 3 row is for setting block
    const row = 23;
    const col = 10;
    console.log(row, col);
    makeMatrix(row, col);
}

function init(){
    matrixForm.addEventListener("click",handleSubmit)
}
init();
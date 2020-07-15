const matrix = [[1, 0, 1, 0, 1], 
                [1, 0, 1, 0, 1], 
                [1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1]];


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

function init(){
    const boxIndex = boxIndexCheck(matrix);
    console.log(boxIndex);
}

init();
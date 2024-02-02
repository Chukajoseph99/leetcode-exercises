function rotate(matrix) {
    for(let i = 0; i < matrix.length; i++){
        for(let j = i; j < matrix.length; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for(let row of matrix){
        row.reverse();
    }
};
// Pair Programming with @GMahant1 & @kickycaptain
const transpose = function(matrix) {
    const newMatrix = [];
    let row = matrix.length;
    let column = matrix[0].length;
    for (let y = 0; y < column; y++) {
        let newArray = [];
        for (let x = 0; x < row; x++) {
            let transposedY = x;
            let transposedX = y;
            newArray.push(matrix[transposedY][transposedX]);
        }
        newMatrix.push(newArray);
    }
    return newMatrix;
};

const wordSearch = (letters, word) => {
    if (Array.isArray(letters) === false) {
        throw "Error: input is not an array"
    } else if (letters.length < 1) { 
        return false;
    } else {
        const verticalJoin = transpose(letters).map(ls => ls.join(''));
        const horizontalJoin = letters.map(ls => ls.join(''));
        for (l of horizontalJoin) {
            if (l.includes(word)) return true;
        }
        for (v of verticalJoin) {
            if (v.includes(word)) return true;
        }
    }
    return false;
};

module.exports = wordSearch;
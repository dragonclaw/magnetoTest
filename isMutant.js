const dnaToTest = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]

let isMutant = function (dna) {
    let dnaArray = [[]];
    dnaArray = transcodeDNA(dna);
    let trueSequencesCount = 0;
    for (let y = 0; y < dnaArray[0].length; y++) {
        for (let x = 0; x < dnaArray.length; x++) {
            let charToCheck = dnaArray[y][x];
            if (testVertical(y, x, charToCheck, dnaArray))
                trueSequencesCount++;
            if (testHorizontal(y, x, charToCheck, dnaArray))
                trueSequencesCount++;
            if (testDiagonal(y, x, charToCheck, dnaArray))
                trueSequencesCount++;
        }
    }
    if (trueSequencesCount > 1) {
        return true;
    }
    else
        return false;
}

const testVertical = function (indexY, indexX, charToCheck, dnaArray) {
    //if reaches beyond the third row, there is no reason to keep testing
    if (3 - (indexY + 1) < 0) {
        return false;
    }
    let result = true;
    for (let x = 1; x < 4; x++) {
        if (dnaArray[indexY + x][indexX] !== charToCheck) {
            result = false;
            break;
        }
    }
    return result;
}

const testHorizontal = function (indexY, indexX, charToCheck, dnaArray) {
    //if reaches beyond the third row, there is no reason to keep testing
    if (3 - (indexX + 1) < 0) {
        return false;
    }
    let result = true;
    for (let x = 1; x < 4; x++) {
        if (dnaArray[indexY][indexX + x] !== charToCheck) {
            result = false;
            break;
        }
    }
    return result;
}

const testDiagonal = function (indexY, indexX, charToCheck, dnaArray) {
    //if reaches beyond the third row, there is no reason to keep testing
    if ((3 - (indexX + 1) < 0) || (3 - (indexY + 1) < 0)) {
        return false;
    }
    let result = true;
    for (let x = 1; x < 4; x++) {
        if (dnaArray[indexY + x][indexX + x] !== charToCheck) {
            result = false;
            break;
        }
    }
    return result;
}

const transcodeDNA = function (dnaArray) {
    let destructuredDNAArray = [[]];
    for (let i = 0; i < dnaArray.length; i++) {
        destructuredDNAArray[i] = new Array(dnaArray.length);
    }
    dnaArray.forEach((dna, indexX) => {
        [...dna].forEach((singleChar, indexY) => {
            destructuredDNAArray[indexX][indexY] = singleChar;
        })
    });
    return destructuredDNAArray;
}

console.log(isMutant(dnaToTest));
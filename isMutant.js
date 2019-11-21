const dnaToTest = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]

let isMutant = function (dna) {
    let dnaArray = [[]];
    dnaArray = transcodeDNA(dna);
    for (let y = 0; y < dnaArray[0].length; y++) {
        for (let x = 0; x < dnaArray.length; x++) {
            let charToCheck = dnaArray[y][x];
            //console.log(testVertical(y, x, charToCheck, dnaArray))
            //console.log(testHorizontal(y, x, charToCheck, dnaArray))
            console.log(testDiagonal(y, x, charToCheck, dnaArray))
        }
    }
}

const testVertical = function (indexY, indexX, charToCheck, dnaArray) {
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

isMutant(dnaToTest);
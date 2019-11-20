const dnaToTest = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]

let isMutant = function (dna) {
    let dnaArray = [[]];
    dnaArray = transcodeDNA(dna);
    for (let x = 0; x < dnaArray[0].length; x++) {
        for (let y = 0; y < dnaArray.length; y++) {
            let charToCheck = dnaArray[y][x];
            console.log(testVertical(x, y, charToCheck, dnaArray))
        }
    }
}

const testVertical = function (indexX, indexY, charToCheck, dnaArray) {
    if (4 - indexY < 0) {
        return false;
    }
    let result = true;
    for (let x = 1; x < 4; x++) {
        console.log('comparing this char');
        console.log(charToCheck);
        console.log('to this char moving');
        console.log(dnaArray[indexY + x][indexX]);
        if (dnaArray[indexY + x][indexX] !== charToCheck) {
            console.log('break')
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
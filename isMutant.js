const dnaToTest = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]

let isMutant = function (dna) {
    let dnaArray = [[]];
    dnaArray = transcodeDNA(dna);
    console.log(dnaArray);

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
// Your code here
const mapToNegativize = (sourceArray) => {
    const mappedArr = [];
    for (let i = 0; i < sourceArray.length; i++) {
        mappedArr.push(sourceArray[i] * -1);
    }
    return mappedArr;
}

const mapToNoChange = sourceArr => sourceArr;

const mapToDouble = sourceArr => {
    const mappedArr = [];
    for (let i = 0; i < sourceArr.length; i++) {
        mappedArr.push(sourceArr[i] * 2);
    }
    return mappedArr;
}

const mapToSquare = sourceArr => {
    const mappedArr = [];
    for (let i = 0; i < sourceArr.length; i++) {
        mappedArr.push(sourceArr[i] ** 2);
    }
    return mappedArr;
}

const reduceToTotal = (sourceArray, startingPoint = 0) => {
    let total = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
        total += sourceArray[i];
    }
    return total;
}

const reduceToAllTrue = sourceArray => {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === false) {
            return false;
        }
    }
    return true;
}

const reduceToAnyTrue = sourceArray => {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === true) {
            return true;
        }
    }
    return false;
}
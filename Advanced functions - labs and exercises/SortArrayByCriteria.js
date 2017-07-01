function solve(inputArray, criteria) {
    return inputArray.sort(function (a, b) {
        if(criteria == 'asc') {
            return a - b;
        } else {
            return b - a;
        }
    });
}

console.log(solve([14, 7, 17, 6, 8], 'desc'));
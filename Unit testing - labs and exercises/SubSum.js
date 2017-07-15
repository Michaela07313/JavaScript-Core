function solve(inputArray, startIndex, endIndex) {
    if(!Array.isArray(inputArray)) {
        return NaN;
    } else {
        startIndex < 0 ? startIndex = 0 : startIndex = Number(startIndex);
        let arr = inputArray.map(Number);
        let sum = 0;
        if(Number(endIndex) < 0 || Number(endIndex) >= arr.length) {
            endIndex = Number(arr.length - 1);
        }

        for(let i = startIndex; i <= endIndex; i++){
            if(typeof(i) == 'number') {
                sum += Number(arr[i]);
            } else {
                return NaN;
            }
            
        }
        return sum;
    }
}

console.log(solve('text', 0, 2));
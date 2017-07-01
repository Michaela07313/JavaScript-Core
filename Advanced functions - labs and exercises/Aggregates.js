function aggregate(inputArray) {
    let sumFunc = (a,b) => a + b;
    let productFunc = (a,b) => a * b;
    let max = Math.max.apply(null, inputArray);
    let min = Math.min.apply(null, inputArray);

    function sumArrayElements(inputArray, sumFunc, productFunc) {
        let result = inputArray[0];
        let product = inputArray[0];
        for (let nextElement of inputArray.slice(1)) {
            result = sumFunc(result, nextElement);
            product = productFunc(product, nextElement);
        }
        console.log(`Sum = ${result}`);
        console.log(`Min = ${min}`);
        console.log(`Max = ${max}`);
        console.log(`Product = ${product}`);
        console.log(`Join = ${inputArray.join('')}`);
    }

    return sumArrayElements(inputArray, sumFunc, productFunc);
}

aggregate([5, -3, 20, 7, 0.5]);

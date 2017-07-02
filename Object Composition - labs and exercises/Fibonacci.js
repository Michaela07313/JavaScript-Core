function solve(n) {
    
    let fib = (function() {
        let f1 = 0;
        let f2 = 1;

        return function() {
            let oldf1 = f1;
            let oldf2 = f2;
            f1 = oldf2;
            f2 = oldf1 + oldf2;
            return oldf2;
        }
    })();

    let fibNumbers = [];
    for (let i = 1; i <= n; i++) {
        fibNumbers.push(fib());
    }
    return fibNumbers;
}



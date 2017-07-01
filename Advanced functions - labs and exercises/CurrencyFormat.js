function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function getDollarsFormatted(formatter) {
    return function(value) {
        return formatter(',', '$', true, value)
    }
}

let dollars = getDollarsFormatted(currencyFormatter);
console.log(dollars(5345));
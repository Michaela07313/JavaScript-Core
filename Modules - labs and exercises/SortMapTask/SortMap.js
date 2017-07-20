let sortFunction = require('./helper-functions');

function mapSort(map, sortFn) {
    if(!sortFn){
        sortFn = function (a, b) {
            return a[0].toString().localeCompare(b[0].toString());
        }
    }
    let x = sortFunction(map, sortFn);
    return x;
}

module.exports = mapSort;
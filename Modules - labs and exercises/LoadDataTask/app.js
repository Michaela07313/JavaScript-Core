result.data = require('./data');

function sort(property) {
   return result.data.sort((a, b) => a[property].localeCompare(b[property]));
}

function filter(property, value) {
    let filteredArr = [];
    for(let x of result.data) {
        if(x[property] == value) {
            filteredArr.push(x);
        }
    }

    return filteredArr;
}

result.sort = sort;
result.filter = filter;
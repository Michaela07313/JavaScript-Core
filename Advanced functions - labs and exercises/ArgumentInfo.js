function solve() {
    let summary = {};
    for(let i = 0; i < arguments.length; i++) {
        let currentArg = arguments[i];
        let type = typeof(currentArg);
        console.log(`${type}: ${currentArg}`);

        if(!summary[type]) {
            summary[type] = 1;
        } else summary[type]++;
    }

    let sortedTypes = [];
    for (let type in summary) {
        sortedTypes.push([type, summary[type]]);
    }

    sortedTypes.sort(function(a, b) {
        return b[1] - a[1];
    });

    for(let type of sortedTypes) {
        console.log(`${type[0]} = ${type[1]}`);
    }
}

solve('cat', 42, function () { console.log('Hello world!'); });
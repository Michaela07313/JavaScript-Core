function sortFunction(map, softFn) {
    let sorted = new Map();
    [...map.entries()].sort(softFn).forEach(e => sorted.set(e[0], map.get(e[0])));
    return sorted;
}

module.exports = sortFunction;
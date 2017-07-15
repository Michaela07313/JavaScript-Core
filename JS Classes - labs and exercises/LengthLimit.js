class Stringer {
    constructor(innerString,innerLength) {
        this.innerString = innerString,
        this.innerLength = innerLength
    }

    increase(length) {
        return this.innerLength += Number(length);
    }

    decrease(length) {
        if(this.innerLength - Number(length) <= 0) {
            this.innerLength = 0;
            return this.innerLength;
        } else {
            return this.innerLength -= Number(length);
        } 
    }

    toString() {
        if(this.innerLength == 0) {
            return '...';
        } else if(this.innerString.length > this.innerLength) {
            let neededLength = this.innerString.length - this.innerLength
            let cuttedString = this.innerString.substr(0,neededLength); 
            return cuttedString + '...';
        } else {
            return this.innerString;
        }
    }
}

let test = new Stringer('Test', 5);
console.log(test.toString());
//test.decrease(3);
//console.log(test.toString());
test.increase(4);
console.log(test.toString());
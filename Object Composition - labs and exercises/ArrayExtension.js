(function solve() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    };

    Array.prototype.skip = function(n) {
        let num = Number(n);
        let result = [];
        if(num < this.length) {
            for(let element = num; element < this.length; element++) {
                result.push(this[element]);
            }
            return result;
        } else return this;
    }

    Array.prototype.take = function(n) {
        let num = Number(n);
        let result = [];
        if(num < this.length) {
            for(let element = 0; element < num; element++) {
                result.push(this[element]);
            }
            return result;
        } else return this;
    }

    Array.prototype.sum = function() {
        let sum = 0;
        for(let i = 0; i< this.length; i++) {
            sum += this[i];
        }
        return sum;
    }

    Array.prototype.average = function() {
        let sum = this.sum();
        let avg = sum / this.length;
        return avg;
    }

})();
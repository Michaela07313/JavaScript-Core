(function solve() {
    String.prototype.ensureStart = function(inputString) {
        if(!this.toString().startsWith(inputString)){
            return `${inputString}` + this.toString();
        } else {
            return this.toString();
        }
    };

    String.prototype.ensureEnd = function(inputString) {
        if(!this.toString().endsWith(inputString)){
            return this.toString() + `${inputString}`;
        } else {
            return this.toString();
        }
    };

    String.prototype.isEmpty = function() {
        if(!this.toString() == ''){
            return false;
        } else {
            return true;
        }
    };

    String.prototype.truncate = function(n) {
        if(Number(n) < 4) {
            return '.'.repeat(n);
        }

        if(this.toString().length <= Number(n)){
            return this.toString();
        } else if(this.toString().length > Number(n)){
            let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
            if(lastIndex != -1){
                return this.toString().substr(0, lastIndex) + "...";
            } else {
                return this.toString().substr(0, n-3) + "...";
            }
        }
    };

    String.format = function(string, ...params) {
        for(let i = 0; i < params.length; i++){
            let index = string.indexOf("{"+i+"}");
            while (index != -1) {
                string = string.replace("{"+i+"}", params[i]);
                index = string.indexOf("{"+i+"}");
            }
        }
        return string;
    }

})();
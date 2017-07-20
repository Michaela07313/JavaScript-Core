let Entity = require('./Entity');

class Dog extends Entity{
    constructor(name) {
        super(name);
    }

    saySomething() {
        return `${super.name} barks!`;
    }
}

module.exports = Dog;
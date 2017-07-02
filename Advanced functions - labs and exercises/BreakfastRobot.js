function() {
        let storage = new Map();
        storage.set('protein', 0);
        storage.set('carbohydrate', 0);
        storage.set('fat', 0);
        storage.set('flavour', 0);

        function printInfo(storage) {
            let result = `protein=${storage.get('protein')} carbohydrate=${storage.get('carbohydrate')} fat=${storage.get('fat')} flavour=${storage.get('flavour')}`;
            return result;
        }

        function cooking(recipe, quantity, storage) {
            let message = "";
            switch(recipe.toLowerCase()) {
                case 'apple':                    
                    if(storage.get('flavour') < 2 * quantity){
                        message = 'Error: not enough flavour in stock';
                    }
                    if(storage.get('carbohydrate') < quantity) {
                        message = 'Error: not enough carbohydrate in stock';
                    }
                    if (message == "") {
                        storage.set('carbohydrate', storage.get('carbohydrate') - quantity);
                        storage.set('flavour', storage.get('flavour') - (2 * quantity));
                        return 'Success';
                    }
                    return message;
                    break;
                case 'coke':
                    if(storage.get('flavour') < 20 * quantity){
                        message = 'Error: not enough flavour in stock';
                    }
                    if(storage.get('carbohydrate') < 10 * quantity) {
                        message = 'Error: not enough carbohydrate in stock';
                    }
                    if(message == "") {
                        storage.set('carbohydrate', storage.get('carbohydrate') - (10 * quantity));
                        storage.set('flavour', storage.get('flavour') - (20 * quantity));
                        return 'Success';
                    }
                    return message;
                    break;
                case 'burger':
                    if(storage.get('flavour') < 3 * quantity){
                        message = 'Error: not enough flavour in stock';
                    }
                    if(storage.get('fat') < 7 * quantity){
                        message = 'Error: not enough fat in stock';
                    }
                    if(storage.get('carbohydrate') < 5 * quantity) {
                        message = 'Error: not enough carbohydrate in stock';
                    }
                    if(message == "") {
                        storage.set('carbohydrate', storage.get('carbohydrate') - (5 * quantity));
                        storage.set('fat', storage.get('fat') - (7 * quantity));
                        storage.set('flavour', storage.get('flavour') - (3 * quantity));
                        return 'Success';
                    }
                    return message;
                    break;
                case 'omelet':                    
                    if(storage.get('fat') < quantity){
                        message = 'Error: not enough fat in stock';
                    }
                    if(storage.get('flavour') < quantity){
                        message = 'Error: not enough flavour in stock';
                    } 
                    if(storage.get('protein') < 5 * quantity) {
                        message = 'Error: not enough protein in stock';
                    }
                    if(message == ""){
                        storage.set('protein', storage.get('protein') - (5 * quantity));
                        storage.set('fat', storage.get('fat') - quantity);
                        storage.set('flavour', storage.get('flavour') - quantity);
                        return 'Success';
                    }
                    return message;
                    break;
                case 'cheverme':
                    if(storage.get('flavour') < 10 * quantity){
                        message = 'Error: not enough flavour in stock';
                    }
                    if(storage.get('fat') < 10 * quantity){
                        message = 'Error: not enough fat in stock';
                    }                   
                    if(storage.get('carbohydrate') < 10 * quantity){
                        message = 'Error: not enough carbohydrate in stock';
                    }
                    if(storage.get('protein') < 10 * quantity) {
                        message = 'Error: not enough protein in stock';
                    }
                    if(message == "") {
                        storage.set('carbohydrate', storage.get('carbohydrate') - (10 * quantity));
                        storage.set('fat', storage.get('fat') - (10 * quantity));
                        storage.set('flavour', storage.get('flavour') - (10 * quantity));
                        storage.set('protein', storage.get('protein') - (10 * quantity));
                        return 'Success';
                    }
                    return message;
                    break;
            }
        }

        return function (commandStrings) {
            let tokens = commandStrings.split(" ");
            switch(tokens[0]) {
                case 'restock':
                    let ingredient = tokens[1];
                    let quantity = Number(tokens[2]);
                    storage.set(ingredient, storage.get(ingredient) + quantity);
                    return 'Success';
                    break;
                case 'prepare':
                    let recipe = tokens[1];
                    let quantityToPrepare = Number(tokens[2]);
                    return cooking(recipe, quantityToPrepare, storage);
                    break;
                case 'report':
                    return printInfo(storage);
                    break;
            }
        }
}
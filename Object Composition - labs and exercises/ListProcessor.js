function solve(commands) {
    let processor = (function() {
        let text = [];
        return function processor(commandStrings) {
            let tokens = commandStrings.split(" ");
            switch(tokens[0]) {
                case 'add':
                    text.push(tokens[1]);
                    break;
                case 'remove':
                    text = text.filter(e => e !== tokens[1]);
                    break;
                case 'print':
                    console.log(text.toString());
                    break;
            }
        }
    })();

    for(let command of commands) {
        processor(command);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
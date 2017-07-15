function validate(inputObject) {
    let methodTypes = ['get', 'post', 'delete', 'connect'];
    let uriPattern = /(\*|([a-zA-Z\d\.]+))/g;
    let versionTypes = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', '0.9', '1.0', '1.1', '2.0'];
    let msgPattern = /[\<\>/\\&\'\"]*/g;
    let props = ['method', 'uri', 'version', 'message'];
    let checker = false;

    for(let key of Object.keys(inputObject)) {
        
        if(!(props.includes(key.toLowerCase()))){
            checker = true;
            throw new Error(`Invalid request header: Invalid ${prop}`);
            
        }
            console.log(props[key])
        
    }

    console.log(checker)
}

validate({
  method: 'GET',
  version: 'HTTP/1.1',
  uri: 'sdfdsf',

});
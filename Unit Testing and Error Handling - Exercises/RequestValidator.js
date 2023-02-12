function requestValidator(object) {

    let methodValidWords = ['GET', 'POST', 'DELETE', 'CONNECT'];
    if (!object.hasOwnProperty('method') || !methodValidWords.includes(object['method'])) {
        throw new Error(`Invalid request header: Invalid Method`);
    }
    const regexForUri = /^([a-zA-Z0-9.])+$/g;
    if (object['uri'] == undefined || regexForUri.test(object['uri']) == false) {
        throw new Error(`Invalid request header: Invalid URI`);
    }
    let versionValidWords = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if (object['version'] == undefined || !versionValidWords.includes(object['version'])) {
        throw new Error(`Invalid request header: Invalid Version`);

    }
    const regexForMessage = /^[^<>\\&'"]*$/g;

    if (object['message'] == undefined || regexForMessage.test(object['message']) == false) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return object;
}
console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
));
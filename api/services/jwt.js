var crypto = require('crypto');

exports.encode = function(payload, secret){
    // Encoding and decoding scheme, for now use HS256'
    algorithm = 'HS256';
    
    // Create header, 
    var header = {
        typ: 'JWT',
        alg: algorithm
    };
    
//    Finally , every jart(jwt) has header, payload and signature and all three are Base64 encoded.
    
    var jwt = base64Encode(JSON.stringify(header)) + '.' + base64Encode(JSON.stringify(payload));
    
    return jwt + '.' + sign(jwt, secret);
}


function base64Encode(str){
    return new Buffer(str).toString('base64');
}

function sign(str, key){
    return crypto.createHmac('sha256', key).update(str).digest('base64');
}
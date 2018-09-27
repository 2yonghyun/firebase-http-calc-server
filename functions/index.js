const functions = require('firebase-functions');
const express = require('express');

const app = express();
app.get('/calc', (req, res) => {
    if (req.method !== 'GET') {
        res.status(403).send('Wrong Method, please use GET!');
    }
    
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let operator = req.query.operator;
    var code = 2000;
    var status = "OK";
    var result = 0;
    var json = null;
    
    if( Object.keys(req.query).length === 0 
        || !checkWithRegex(num1) || !checkWithRegex(num2)) {
        code = 4003;
        status = "INVALID_REQUEST";
    }
    
    if (code !== 4003) {
        switch(operator) {
            case 'add':
                result = parseFloat(num1) + parseFloat(num2);
                break;
            case 'sub':
                result = parseFloat(num1) - parseFloat(num2);
                break;
            case 'mul':
                result = parseFloat(num1) * parseFloat(num2);
                break;
            case 'div':
                if (parseInt(num2) === 0) {
                    status = "DIV_BY_ZERO";
                    code = 2007;
                } else {
                    result = parseFloat(num1) / parseFloat(num2);
                }
                break;
            default:
                status = "INVALID_OPERATORS";
                code = 2005;
        }
    }

    res.writeHead(200, {"Content-Type": "application/json"});
    if (code === 2000) {
        json =  JSON.stringify({
            "response": {
                "status": status,
                "code": code,
                "result": result
            }
            
        });
    } else {
        json =  JSON.stringify({
            "response": {
                "status": status,
                "code": code
            }
        });
    }
    
    res.end(json);
});

exports.app = functions.https.onRequest(app);

function checkWithRegex(value){
    var reg = /^-?\d+\.?\d*$/;
    return reg.test(value);
}
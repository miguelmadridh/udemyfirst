const http = require("http");

http.createServer((req, res) => {

    res.writeHead(200,{'Content-cType': 'application/json'});
    res.write('Hola mundo');
    let salida ={
        nommbre:'Miguel',
        anios:34
    }
    res.write(JSON.stringify(salida))
    res.end();
}).listen(8080);

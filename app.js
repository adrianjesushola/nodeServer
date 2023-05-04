const http = require('http')

http.createServer((request, response)=>{
    //console.log(request);
    const persona = {
        id:1,
        nombre:'Luis'
    }
    response.setHeader('content-Disposition','attachmen; filename=lista.csv')
    response.writeHead(201, {'Content-Type':'applicartion/csv'})
    response.write('id,nombre\n');
    response.write('1,Jose\n');
    response.write('2,stev\n');
    response.write('3,orochi\n');
    response.write('4,miau\n');
    response.write('5,nombre\n');
    response.end();
}).listen(8080);

console.log('Escuchando el puerto', 8080)
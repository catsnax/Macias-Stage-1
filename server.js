const http = require('http');
const file = require('fs');

const server = http.createServer((req, res) => {
    file.readFile('./index.html', (err, data) => {
        res.write(data);
        res.end();
    })
})

server.listen(3000, 'localhost', () => {
    console.log("listening at port 3000");
})


//command to run node file is 'node server'
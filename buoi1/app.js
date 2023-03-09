const http = require("http");
const products = [
    {id:2, name: 'Nguyen Duy Hiep'},
    {id:3, name: 'Nguyen Duy Hiepw'},
];

const server = http.createServer(function(req, res) {
    if(req.url === "/"){
        res.setHeader("Content-Type", "text/html");
        res.end("Home Page");
    }
    if(req.url === "/products"){
        // res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(products));
    }
});

server.listen(7890, function() {
    console.log("server is running on port 7890");
});
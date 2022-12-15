const  fs = require("fs");
const http = require("http");


fs.writeFile("./index.html", ` <h1> Hello World </h1>  \n <p> This is Tejas Bhadane... </p>`, (err) => {
    // console.log(err);
});


fs.readFile("./index.html",function(error, data){
    const server = http.createServer((req, res) => {
        res.writeHead(200, {"Content-type":"text-html"});
        res.write(data);
        res.end();
    })
    server.listen(5000, () => console.log("The server is at port 5000"));
});
var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if (req.url == "/") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write("<h1> Welcome to the HOME  Page</h1>");      // The message will print in the browser
        res.end();
    }
    else if(req.url =="/welcome"){
        res.writeHead(200, { "Content-type": "text/plain"});
        // res.write("Welcome to Dominos!");
        res.end("Welcome To Dominos");
    }
    else if(req.url =="/contact"){
        res.writeHead(200, {"Content-type" : "application/json"});
        res.end(JSON.stringify({
            phone: '18602100000', 
            email: 'guestcaredominos@jublfood.com' 
            
        }));
    }
    else {
        res.writeHead(404, {"Content-type": "text/html"}),
        res.write("<h1> Error! Page Not Found <h1> ");
        res.end();
        
    }

}
httpServer.listen(8081, ()=> console.log("The server is up at port 8081"));
module.exports = httpServer;
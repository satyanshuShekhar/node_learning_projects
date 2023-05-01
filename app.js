// To include the HTTP module, use the require() method
var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');

// http.createServer() method, will be executed when someone tries to access the computer on port 8080.
//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); //The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.
    //   res.write("The date and time are currently: " + dt.myDateTime()); //write a response to the client
    // res.write(req.url); //This object has a property called "url" which holds the part of the url that comes after the domain name.  
    /*Use the url module to turn the querystring into an object:*/
    var q = url.parse(req.url, true).query;
    /*Return the year and month from the query object:*/
    var txt = q.year + " " + q.month;
    res.end(txt); //end the response
}).listen(8080); //the server object listens on port 8080
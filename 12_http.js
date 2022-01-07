const http =require('http');
/*
const server = http.createServer((req,res)=>{
    res.write('Welcome to our home page');
    res.end();
});
*/

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    res.end('<h1> oops!!! </h1>' + 
    '<p> We cant seem to find the page you are looking for. </p>' +
    '<a href ="/"> Return to home </a>'
    )
});

server.listen(5000);
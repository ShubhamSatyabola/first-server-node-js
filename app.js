const { TIMEOUT } = require('dns')
const http = require('http')
const port = 4000

const server = http.createServer((req, res)=>{
      
    // console.log(req.url, req.method, req.headers) 
    const url = req.url
    if(url == '/home'){
        res.write('<html>')
        res.write('<head><title>my responses</title></head>')   
        res.write('<body><p>welcome home</p></body>') 
        res.write('</html>')
    }
    else if(url == '/about'){
        res.write('<html>')
        res.write('<head><title>my responses</title></head>')   
        res.write('<body><p>welcome to about us page</p></body>') 
        res.write('</html>')
    }    
    else{
            res.write('<html>')
            res.write('<head><title>my responses</title></head>')   
            res.write('<body><p>welcome to node js project</p></body>') 
            res.write('</html>')
        } 
    res.end()         
                   
    
})
server.listen(port)
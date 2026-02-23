const http = require('http'); 
http.createServer(function (req, res) { 
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  res.write('Hello World!'); 
  res.end(); 
}).listen(8080);
const fs = require('fs'); 
fs.writeFile('file.txt', 'Hello World!', function (err) { 
  if (err) throw err; 
  console.log('File saved!'); 
}); 
async function myFunction() { 
  try { 
    const result = await myPromise; 
    console.log(result); 
  } catch (error) { 
    console.log(error); 
  } 
} 
 
myFunction();
const fs = require('fs'); 
fs.readFile('file.txt', 'utf8', function (err, data) { 
if (err) throw err; 
console.log(data); 
});

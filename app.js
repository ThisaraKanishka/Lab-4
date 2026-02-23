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

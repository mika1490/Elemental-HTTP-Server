const fs = require('fs');
const path = require('path');
const get404 = require('./_404Handler')
const queryString = require('querystring');
module.exports = (request, response, data) => {
  // fs.readFile(path.join(__dirname, '..', url), (err, data)=> {
  // if(err) {
  //   return get404(response);
  // }

  let elementData = queryString.parse(data)
  
  let elementBody = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>The Elements - ${elementData.elementName}</title><link rel="stylesheet" href="/css/styles.css"></head><body><h1>${elementData.elementName}</h1><h2>H</h2><h3>Atomic number ${elementData.elementAtomicNumber}</h3><p>${elementData.elementName} is a chemical element with symbol ${elementData.elementSymbol} and atomic number ${elementData.elementAtomicNumber}. It is ${elementData.elementDescription}</p><p><a href="/">back</a></p></body></html>`
  
  fs.writeFile('./public/' + elementData.elementName + '.html', elementBody, (err) => {
    if (err) throw err;

   response.write(JSON.stringify({
   'success': true
  }))
  // response.writeHead(200, 'OK');
  // response.write(data)
  // });
  return response.end()
      console.log('hi');
    });
};



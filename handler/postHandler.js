const fs = require('fs');
const path = require('path');
const get404 = require('./_404Handler')
const queryString = require('querystring');
module.exports = (request, response, data) => {

  let elementData = queryString.parse(data)
  
  let elementBody = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>The Elements - ${elementData.elementName}</title><link rel="stylesheet" href="/css/styles.css"></head><body><h1>${elementData.elementName}</h1><h2>H</h2><h3>Atomic number ${elementData.elementAtomicNumber}</h3><p>${elementData.elementName} is a chemical element with symbol ${elementData.elementSymbol} and atomic number ${elementData.elementAtomicNumber}. It is ${elementData.elementDescription}</p><p><a href="/">back</a></p></body></html>`

  fs.readFile(`./public/${postReq.elementName}.html`, {
    encoding: 'utf8'
  })
  fs.writeFile('./public/' + elementData.elementName + '.html', elementBody, (err) => {
    if (err) throw err;

  })
  fs.readdir('.public', {
    encoding: 'utf8'
  }, (err, files) => {
    rewriteIndex(files);
  }) 
  createPostHeader(response);
   response.write(JSON.stringify({
   'success': true
  }))
 
  return response.end()
      console.log('hi');
};

function rewriteIndex (arr) {
  let indexList = arr.filter((element) => {
    return (element.endsWith('.html') && element !== '404.html' && element !== 'index.html')
  }).map((element) => {
    return `<li><a href='${element}'>${element.split('.')[0]}</a><li>\n `;
  }).join('');
  let updateIndex = 
  `<!DOCTYPE html>
 +<html lang="en">
 +<head>
 +  <meta charset="UTF-8">
 +  <title>The Elements</title>
 +  <link rel="stylesheet" href="/css/styles.css">
 +</head>
 +<body>
 +  <h1>The Elements</h1>
 +  <h2>These are all the known elements.</h2>
 +  <h3>These are 2</h3>
 +  <ol>
 + ${indexList}
 +  </ol>
 +</body>
 +</html>`;

 fs.writeFile('./public/index.html', updateIndex, (err) => {
   if(err) throw err;
   console.log('index updated');
 })
}



const http = require('http');
const qs = ('queryString');
//path joins strings 
const path = require('path');
const fs = require('fs');
const { getHandler, postHandler } = require('./handler');

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response, data) => {
  const url = getUrl(request.url);

  switch (request.method) {
    case 'GET':
      getHandler(url, response);
      break;

    case 'POST':
      let data = '';
      request.on('data', (chunk) => {
        data += chunk;
      });
      request.on('end', () => {
        postHandler(request, response, data);

      })
      break;

    default:
      response.writeHead(405, 'Method Not Allowed');
      response.end();
  }
})

server.listen(PORT, () => {
  console.log(`Server Listening Port: ${PORT}`);
});

function getUrl(requestUrl) {
  let url = requestUrl.split('?')[0];
  if (url.length === 1) {
    url = 'index.html'
  };
  url = path.join('public', url.toLowerCase());
  return url;
}




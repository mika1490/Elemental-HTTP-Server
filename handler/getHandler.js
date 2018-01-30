const fs = require('fs');
const path = require('path');
const get404 = require('./_404Handler')

module.exports = (url, response) => {
  return fs.readFile(path.join(__dirname, '..', url), (err, data)=> {
  if(err) {
    return get404(response);
  }
  response.writeHead(200, 'OK');
  response.write(data)
  return response.end()
});
};
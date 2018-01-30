const fs = require('fs');
const path = require('path');

module.exports = (response) => {
  return fs.readFile(`./public/404.html`,(err, data) => {
    if(err) {
      console.log(err);
    }
   response.writeHead(404, 'Not Found')
   response.write(data);
   response.end();
  });
};


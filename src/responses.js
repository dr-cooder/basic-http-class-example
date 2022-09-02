const fs = require('fs');
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const client2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const sendHtml = (request, response, file) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(file);
  response.end();
};

const getIndex = (request, response) => {
  sendHtml(request, response, index);
};

const getClient2 = (request, response) => {
  sendHtml(request, response, client2);
};

const getMessage = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(`Could not find ${request.url}`);
  response.end();
}

module.exports = {
  getIndex,
  getClient2,
  getMessage,
};
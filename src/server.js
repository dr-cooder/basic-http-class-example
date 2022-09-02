const http = require('http');
const responses = require('./responses.js');
console.log(responses);

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  if (request.url==='/client2'){
    responses.getClient2(request, response);
  } else if (request.url==='/'){
    responses.getIndex(request, response);
  } else {
    responses.getMessage(request, response);
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

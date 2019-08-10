const server = require("./api/server.js");

const port = 8007;
server.listen(port, () =>
  console.log(`\n *** Listening on port ${port} *** \n`)
);

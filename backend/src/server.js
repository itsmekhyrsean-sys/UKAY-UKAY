const http = require("node:http");
const app = require("./app");
const config = require("./config/app.config");

const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`${config.appName} running at http://localhost:${config.port}`);
});

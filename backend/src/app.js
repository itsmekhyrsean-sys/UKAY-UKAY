const { URL } = require("node:url");
const apiRoutes = require("./routes/api.routes");
const applyCors = require("./middleware/cors.middleware");
const { sendJson } = require("./controllers/resource.controller");

async function app(req, res) {
  if (applyCors(req, res)) return;

  try {
    const requestUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
    await apiRoutes(req, res, requestUrl.pathname);
  } catch (error) {
    sendJson(res, 500, {
      error: "Internal server error.",
      detail: error.message
    });
  }
}

module.exports = app;

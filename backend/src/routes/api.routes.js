const config = require("../config/app.config");
const controller = require("../controllers/resource.controller");

async function apiRoutes(req, res, pathname) {
  const parts = pathname.split("/").filter(Boolean);

  if (pathname === "/" || pathname === "/api") {
    controller.sendJson(res, 200, {
      name: config.appName,
      status: "online",
      resources: config.allowedResources
    });
    return;
  }

  if (pathname === "/api/health") {
    controller.sendJson(res, 200, { ok: true });
    return;
  }

  if (parts[0] !== "api" || !parts[1]) {
    controller.sendJson(res, 404, { error: "Route not found." });
    return;
  }

  const resource = parts[1];
  const id = parts[2];

  if (req.method === "GET" && !id) return controller.listResource(req, res, resource);
  if (req.method === "GET" && id) return controller.getResource(req, res, resource, id);
  if (req.method === "POST" && !id) return controller.createResource(req, res, resource);
  if (req.method === "PATCH" && id) return controller.updateResource(req, res, resource, id);
  if (req.method === "DELETE" && id) return controller.deleteResource(req, res, resource, id);

  controller.sendJson(res, 405, { error: "Method not allowed." });
}

module.exports = apiRoutes;

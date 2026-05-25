const config = require("../config/app.config");
const database = require("../services/database.service");

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
    });
    req.on("end", () => {
      if (!raw) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(error);
      }
    });
  });
}

function isAllowedResource(resource) {
  return config.allowedResources.includes(resource);
}

async function listResource(req, res, resource) {
  if (!isAllowedResource(resource)) {
    sendJson(res, 404, { error: "Unknown resource." });
    return;
  }
  sendJson(res, 200, { data: await database.list(resource) });
}

async function getResource(req, res, resource, id) {
  if (!isAllowedResource(resource)) {
    sendJson(res, 404, { error: "Unknown resource." });
    return;
  }
  const record = await database.find(resource, id);
  sendJson(res, record ? 200 : 404, record ? { data: record } : { error: "Record not found." });
}

async function createResource(req, res, resource) {
  if (!isAllowedResource(resource)) {
    sendJson(res, 404, { error: "Unknown resource." });
    return;
  }
  const payload = await readBody(req);
  sendJson(res, 201, { data: await database.create(resource, payload) });
}

async function updateResource(req, res, resource, id) {
  if (!isAllowedResource(resource)) {
    sendJson(res, 404, { error: "Unknown resource." });
    return;
  }
  const payload = await readBody(req);
  const record = await database.update(resource, id, payload);
  sendJson(res, record ? 200 : 404, record ? { data: record } : { error: "Record not found." });
}

async function deleteResource(req, res, resource, id) {
  if (!isAllowedResource(resource)) {
    sendJson(res, 404, { error: "Unknown resource." });
    return;
  }
  const removed = await database.remove(resource, id);
  sendJson(res, removed ? 200 : 404, removed ? { ok: true } : { error: "Record not found." });
}

module.exports = {
  createResource,
  deleteResource,
  getResource,
  listResource,
  sendJson,
  updateResource
};

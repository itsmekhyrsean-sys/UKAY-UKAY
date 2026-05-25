const path = require("node:path");

module.exports = {
  appName: "UkayPro API",
  port: Number(process.env.PORT) || 4000,
  dataFile: path.resolve(__dirname, "../../data/db.json"),
  allowedResources: [
    "inventory",
    "transactions",
    "comments",
    "orders",
    "messages",
    "automations",
    "users"
  ]
};

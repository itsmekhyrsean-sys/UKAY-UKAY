const fs = require("node:fs/promises");
const crypto = require("node:crypto");
const config = require("../config/app.config");

async function readDatabase() {
  const raw = await fs.readFile(config.dataFile, "utf8");
  return JSON.parse(raw);
}

async function writeDatabase(data) {
  await fs.writeFile(config.dataFile, `${JSON.stringify(data, null, 2)}\n`);
}

function getRecordId(record) {
  return record.id || record.sku || record.invoice;
}

function makeId(resource) {
  const prefix = resource.slice(0, 3).toUpperCase();
  return `${prefix}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
}

async function list(resource) {
  const db = await readDatabase();
  return db[resource] || [];
}

async function find(resource, id) {
  const records = await list(resource);
  return records.find((record) => getRecordId(record) === id);
}

async function create(resource, payload) {
  const db = await readDatabase();
  const record = { id: payload.id || payload.sku || makeId(resource), ...payload };
  db[resource] = [record, ...(db[resource] || [])];
  await writeDatabase(db);
  return record;
}

async function update(resource, id, payload) {
  const db = await readDatabase();
  const records = db[resource] || [];
  const index = records.findIndex((record) => getRecordId(record) === id);
  if (index === -1) return null;
  records[index] = { ...records[index], ...payload };
  await writeDatabase(db);
  return records[index];
}

async function remove(resource, id) {
  const db = await readDatabase();
  const records = db[resource] || [];
  const nextRecords = records.filter((record) => getRecordId(record) !== id);
  if (nextRecords.length === records.length) return false;
  db[resource] = nextRecords;
  await writeDatabase(db);
  return true;
}

module.exports = {
  create,
  find,
  list,
  remove,
  update
};

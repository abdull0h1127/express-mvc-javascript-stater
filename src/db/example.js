const fsp = require("node:fs/promises");
const path = require("node:path");
const uuid = require("uuid");

const dbPath = path.join(__dirname, "..", "..", "db", "example.json");

const findAll = () => {
  return fsp
    .readFile(dbPath, "utf8")
    .then((content) => {
      const example = JSON.parse(content);
      return example;
    })
    .catch((error) => {
      throw error;
    });
};

const create = (data) => {
  const newExample = { id: uuid.v4(), ...data };
  return findAll()
    .then((example) => {
      example.push(newExample);
      return fsp.writeFile(dbPath, JSON.stringify(example, null, 2));
    })
    .then(() => newExample)
    .catch((error) => {
      throw error;
    });
};

module.exports = create
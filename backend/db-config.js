const { MongoClient, ObjectId } = require("mongodb");

const DB_USER = process.env.MONGO_DB_USERNAME;
const DB_PASS = process.env.MONGO_DB_PASSWORD;

// when starting app locally, use // const uri = `mongodb://${DB_USER}:${DB_PASS}@localhost:27017`; URL instead
const uri = `mongodb://${DB_USER}:${DB_PASS}@mongodb`; // docker compose

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  if (err) throw err;
});
const collection = client.db("my-db").collection("my-collection");

module.exports = { collection, ObjectId };

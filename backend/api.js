const express = require("express");
const cors = require("cors");
const { collection } = require("./db-config");

const app = express();
//const router = express.Router();

app.use(cors());

// needed for adding a document
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// FETCH ALL
app.get("/api", (req, res) => {
  collection.find().toArray((err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// INSERT RECORD
app.post("/api", (req, res) => {
  // res.send("Create New User")
  collection.insertOne(req.body, (err, result) => {
    if (err) throw err;
    res.send(result.insertedId);
  });
});

// GET - FETCH ONE RECORD
app.get("/api/:id", (req, res) => {
  //  res.send(req.params.id);
  const query = {
    id: parseInt(req.params.id),
  };
  console.log(query);
  collection.findOne(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// PUT - UPDATE RECORD
app.put("/api/:id", (req, res) => {
  const query = { id: parseInt(req.params.id) };
  let newvalues = { $set: req.body };
  collection.updateOne(query, newvalues, (err, result) => {
    if (err) throw err;
  });
  res.send("1 document updated.");
});

// DELETE - DELETE ONE RECORD
app.delete("/api/:id", (req, res) => {
  const query = { id: parseInt(req.params.id) };
  collection.deleteOne(query, (err, result) => {
    if (err) throw err;
  });
  res.send("1 document deleted.");
});

app.listen(4000, function () {
  console.log("app listening on port 4000!");
});

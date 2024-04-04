const express = require("express");
const cors = require("cors");
const { collection, ObjectId } = require("./db-config");

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

app.get("/api", (req, res) => {
  collection.find().toArray((err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post("/api", (req, res) => {
  // res.send("Create New User")
  collection.insertOne(req.body, (err, result) => {
    if (err) throw err;
    res.send(result.insertedId);
  });
});

// GET http://localhost:4000/api/660536e5385d61dd4ddb35ec
app.get("/api/:id", (req, res) => {
  const query = {
    id: req.params.id,
  };
  console.log(query);
  collection.findOne(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// PUT http://localhost:4000/api/66052a43b273baef73696d6e
app.put("/api/:id", (req, res) => {
  const query = { id: req.params.id };
  let newvalues = { $set: req.body };
  collection.updateOne(query, newvalues, (err, result) => {
    if (err) throw err;
  });
  res.send("1 document updated.");
});

// DELETE http://localhost:4000/api/66052a43b273baef73696d6e
app.delete("/api/:id", (req, res) => {
  const query = { id: req.params.id };
  collection.deleteOne(query, (err, result) => {
    if (err) throw err;
  });
  res.send("1 document deleted.");
});

// router
//   .route("/:id")
//   .get((req, res) => {
//     //res.send(`Get a User with ID: ${req.params.id}`)
//     const query = {
//       _id: ObjectId(req.params.id),
//     };
//     collection.findOne(query, (err, result) => {
//       if (err) throw err;
//       res.send(result);
//     });
//   })
//   .put((req, res) => {
//     //res.send(`Update a User with ID: ${req.params.id}`)
//     const query = { _id: ObjectId(req.params.id) };
//     let newvalues = { $set: req.body };
//     collection.updateOne(query, newvalues, (err, result) => {
//       if (err) throw err;
//     });
//     res.send("1 document updated.");
//   })
//   .delete((req, res) => {
//     //res.send(`Delete a User with ID: ${req.params.id}`)
//     const query = { _id: ObjectId(req.params.id) };
//     collection.deleteOne(query, (err, result) => {
//       if (err) throw err;
//     });
//     res.send("1 document deleted.");
//   });

app.listen(4000, function () {
  console.log("app listening on port 4000!");
});

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello from node API server Updates");
});

//connect to mongodb

mongoose
  .connect(
    "mongodb+srv://nostoc:RDig2QNTnTPt7ggT@backenddb.vzqpdxn.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3003, () => {
      console.log("Server is running on port 3003");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });

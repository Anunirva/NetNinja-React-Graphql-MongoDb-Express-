const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");

// Graphql Schema
const schema = require("./schema/schema");

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mlab database
mongoose.connect(
  "mongodb://admin:admin123@ds163835.mlab.com:63835/netninja-graphql-react"
);
mongoose.connection.once("open", () => {
  console.log("conneted to database");
});

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema, // this is the place where all our frontend endpoints point to
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});

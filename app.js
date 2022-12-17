const express = require("express");
const bodyParser = require("body-parser");
const users = require("./routes/users");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const favicon = require("serve-favicon");

const app = express();
const http = require("http").Server(app);
const PORT = process.env.PORT;
app.use(bodyParser.json());

const whitelist = ["http://localhost:3000", "http://localhost:3900"];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

app.use(express.static(__dirname)); // no static directory, because all static :)
app.use(express.json()); // midelware that make all req & res in the app be JSON type only.
app.use(favicon(path.join(__dirname, "client/", "public/favicon.ico")));
app.use(express.static(path.join(__dirname, "client/public")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/public", "index.html"));
});

app.use("/users/", users);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/public")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

http.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

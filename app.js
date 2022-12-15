const express = require("express");
const bodyParser = require("body-parser");
const users = require("./routes/users");
require("dotenv").config();

const app = express();

const http = require("http").Server(app);
const PORT = process.env.PORT;
app.use(bodyParser.json());

app.use("/users/", users);

http.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

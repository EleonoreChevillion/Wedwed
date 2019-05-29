// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

var db = require("./models");

// Sets up the Express App
// =============================================================

var PORT = process.env.PORT || 3000;
var app = express();

require("./app/routes/api-routes.js")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

// Starts the server to begin listening
// =============================================================

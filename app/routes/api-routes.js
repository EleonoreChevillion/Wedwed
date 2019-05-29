// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const Guests = require("../../models/index");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps
  app.get("/api/all", function(req, res) {
    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Guests.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  // Add a guest
  app.post("/api/new", function(req, res) {
    console.log("Guests Data:");
    console.log(req.body);

    Guests.create({
      name: req.body.name
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });
  });
};
const db = require("../../models");
module.exports = function(app) {
  app.get("/home", async (req, res) => {
    res.render("home", { title: "Home" });
  });
  app.get("/", async (req, res) => {
    res.render("home", { title: "Home" });
  });
  app.get("/location", async (req, res) => {
    res.render("location", { title: "Locations" });
  });
  app.get("/theme", async (req, res) => {
    res.render("theme", { title: "Theme" });
  });
  app.get("/myselection", async (req, res) => {
    res.render("selection", { title: "MySelection" });
  });
  app.get("/gifs", async (req, res) => {
    res.render("memes", { title: "Gifs" });
  });
};

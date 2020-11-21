// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get('/info', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/info.html"));
  })

  app.get("/links", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/links.html"));
  });

  app.get("/pictures", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pictures.html"));
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};

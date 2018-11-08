const path = require("path");

module.exports = function(app){
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/view.html"));
      });
      
      app.get("/make", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/make.html"));
      });
      
      app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/home.html"));
      });
};
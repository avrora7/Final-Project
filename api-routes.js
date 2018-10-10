var db = require("./models");
var passport = require("./config/passport");
const path = require("path");

module.exports = function (app) {
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    //console.log(req)
    console.log(req.user.dataValues)
    res.json("ok");
  });

  app.post("/api/signup", function (req, res) {
    console.log(req.body);

    let userData = {
      email: req.body.email,
      isVendor: req.body.isVendor,
      password: req.body.password,
      company: req.body.company
    };

    db.User.create(userData).then(function (result) {
      res.json(result);
    }).catch(function (err) {
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&" + err);
      res.status(500).json(err);
    });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting data about our user to be used client side
  app.get("/api/user", function (req, res) {
    console.log("********************** in user get *************************")
    console.log(req.user);
    res.json(new Date().toISOString());
  }); 


  app.use(function(req, res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

 


};




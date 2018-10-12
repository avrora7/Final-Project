var db = require("./models");
var passport = require("./config/passport");
const path = require("path");

module.exports = function (app) {
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    //console.log(req)
    console.log(req.user.dataValues)

    res.json({
      isVendor: req.user.dataValues.isVendor,
      isComplete: req.user.dataValues.address != null &&
      usr.country != null &&
      usr.intro != null &&
      usr.phone != null &&
      usr.intro != null
    });
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
      res.status(500).json(err);
    });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user/currentprofileform", function (req, res) {
    db.Specialization.findAll({include:[{ model: db.Service, as: "Service"}]}).then(function(data) {
      
      res.json({
        user: req.user,
        specs: data
      });
    });
    
  }); 

  // Route for getting data about our user to be used client side
  app.get("/api/user", function (req, res) {
    console.log(req.user);
    res.json(new Date().toISOString());
  }); 

  app.put("/api/user", function (req, res) {
    db.User.update(
      req.body,
      {returning: true, where: {id: req.user.id}}
    ).then(function(rowsUpdated) {
      console.log(rowsUpdated);
      res.json("ok");
    })
  });


  app.use(function(req, res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

 


};




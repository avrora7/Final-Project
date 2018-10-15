var db = require("./models");
var passport = require("./config/passport");
const path = require("path");

const NOT_AUTH_MSG = "Not authenticated";



module.exports = function (app) {

  app.post("/api/login", passport.authenticate("local"), function (req, res) {

    let isComplete = 
    req.user.dataValues.website != null &&
    req.user.dataValues.address != null &&
    req.user.dataValues.city != null &&
    req.user.dataValues.country != null &&
    req.user.dataValues.intro != null &&
    req.user.dataValues.phone != null &&
    req.user.dataValues.manager != null &&
    req.user.dataValues.intro != null;

    console.log("is complete =" + isComplete);

    res.json({
      isVendor: req.user.dataValues.isVendor,
      isComplete: isComplete
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

  //reusable methosd to fetch the list of specializations and services
  const getSpecializations = (callback) => {
    db.Specialization.findAll({ include: [{ model: db.Service, as: "Service" }] }).then(function (data) {
      callback(data);
    });
  }

  //reusable method for fetching industries
  const getIndustries = (callback) => {
    db.Industry.findAll().then(function(data) {
      callback(data)
    })
  }

  //used in complete profile
  app.get("/api/user/currentprofileform", function (req, res) {

    if (!req.isAuthenticated()) {
      res.status(401).json(NOT_AUTH_MSG);
    } else {
      if (req.user.isVendor) {
        getSpecializations(function (data) {
          res.json({
            user: req.user,
            specs: data
          });
        });
      } else {
        getIndustries(function (data) {
          res.json({
            user: req.user,
            industries: data
          });
        })
      }
    }
    
  });
  
  //returns list of specializations, not used yet
  app.get("/api/specialization", function (req, res) {
    getSpecializations(function (data) {
      res.json(data);
    });
  });

  //used in lists of vendors and statups
  app.get("/api/user/list/:selectionId", function (req, res) {
    if (!req.isAuthenticated()) {
      res.status(401).json(NOT_AUTH_MSG);
    }
    else {

      let retVal = {
        industries:[],
        specializations:[]
      };

      let iAmVendor = req.user.isVendor;

      //selecting only counterparts
      let userWhereClause = {
        isVendor: !iAmVendor,
      }

      //adding filtering criteria. Different for different role
      if (req.params.selectionId != "-1") {
        let selectionId = parseInt(req.params.selectionId);
        if (iAmVendor) {
          userWhereClause.industryId = selectionId;
        } else {
          userWhereClause.specializationId = selectionId;
        }
      }

      console.log(userWhereClause);

      db.User.findAll(
      {
        where: userWhereClause,
        include: [
          {
            model: db.Relationship,
            as: iAmVendor? "StartupRelationships" : "VendorRelationships",
            where: {
              [iAmVendor? "vendorId": "startupId"]:req.user.id
            },
            required: false,
            include: [
              {
                as: "Messages",
                model: db.Message,
                required: false
              }
            ]
          }
        ]
      }).then(function (users) {

          console.log("number of users=" + users.length)

          if (iAmVendor) {
            getIndustries(function(industries) {
              retVal.industries = industries;
              retVal.users = users;
              res.json(retVal);
            });
          } else {
            getSpecializations(function(specializations) {
              retVal.specializations = specializations;
              retVal.users = users;
              res.json(retVal);
            });
          }
          
      });
    }
  });

  //if user has a relationship and messages, extrct and flatten them into user object
  const postprocessUser = (user, iAmVendor) => {
    let relationships = user[iAmVendor? "StartupRelationships" : "VendorRelationships"];
    if (relationships.length == 0) {
      user.messages = 0;
    } else {
      user.relationshipId = relationships[0].id;
      user.messages = relationships[0].Messages;
    }
    return user;
  }

  // used in initialization or user profile page
  app.get("/api/user/:id", function (req, res) {
    if (!req.isAuthenticated()) {
      res.status(401).json(NOT_AUTH_MSG);
    }
    else {
      let iAmVendor = req.user.isVendor;
      db.User.findOne(
        {
          where: {id: req.params.id},
          include: [
            {
              model: db.Relationship,
              as: iAmVendor? "StartupRelationships" : "VendorRelationships",
              where: {
                [iAmVendor? "vendorId": "startupId"]:req.user.id
              },
              required: false,
              include: [
                {
                  as: "Messages",
                  model: db.Message,
                  required: false
                }
              ]
            }
          ]
        }
        ).then(user => {
          console.log("***************************")
          console.log(user);
          user = postprocessUser(user.dataValues, iAmVendor)
        res.json(user);
      });
    } 
  });

  //used in complete user profile
  app.put("/api/user", function (req, res) {
    if (!req.isAuthenticated()) {
      res.status(401).json(NOT_AUTH_MSG);
    }
    else {
      db.User.update(
        req.body,
        { returning: true, where: { id: req.user.id } }
      ).then(function (rowsUpdated) {
        console.log(rowsUpdated);
        res.json("ok");
      }); 
    }
    
  });

  //used in user detail - connect
  app.get("/api/relationship/connect/:userId", function(req, res) {
    if (!req.isAuthenticated()) {
      res.status(401).json(NOT_AUTH_MSG);
    }
    else {
      let iAmVendor = req.user.isVendor;
      let myId = req.user.id;
      let hisId = req.params.userId;

      let rel = {};
      rel.startupId = iAmVendor ? hisId : myId;
      rel.vendorId = iAmVendor ? myId : hisId;

      db.Relationship.create(rel).then(function (newRel) {
        console.log(newRel);
        res.json(newRel.dataValues.id);
      }); 
    }
  });

  //used in user detail - discionnect
  app.get("/api/relationship/disconnect/:relationshipId", function(req, res) {
    if (!req.isAuthenticated()) {
      res.status(401).json(NOT_AUTH_MSG);
    }
    else {
      db.Message.destroy({where: {relationshipId: req.params.relationshipId}}).then(function() 
      {
        db.Relationship.destroy({where: {id: req.params.relationshipId}}).then(function (data) {
          console.log(data);
          res.json("ok");
        }); 
      });
      
    }
  });

  //create a message
  app.post("/api/message/:relationshipId", function (req, res) {
    if (!req.isAuthenticated()) {
      res.status(401).json(NOT_AUTH_MSG);
    }
    else {
      console.log(req.body)
      db.Message
        .create(
          {
            relationshipId: req.params.relationshipId,
            text: req.user.company + " wrote: " + req.body.message
          })
        .then(function (newMessage) {
          res.json(newMessage);
        });
    }
  });

  app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });




};




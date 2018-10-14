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

  const getSpecializations = (callback) => {
    db.Specialization.findAll({ include: [{ model: db.Service, as: "Service" }] }).then(function (data) {
      callback(data);
    });
  }

  const getIndustries = (callback) => {
    db.Industry.findAll().then(function(data) {
      callback(data)
    })
  }



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

  app.get("/api/specialization", function (req, res) {
    getSpecializations(function (data) {
      res.json(data);
    });
  });


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
            as: iAmVendor? "VendorRelationships" : "StartupRelationships",
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

  //list user relationships for a current user
  app.get("/api/relationsip", function (req, res) {
    if (!req.isAuthenticated()) {
      res.status(401).json(NOT_AUTH_MSG);
    }
    else {
      db.Relationship.findAll(
        {
          where:  {[req.user.isVendor ? "vendorId" : "startupId"]: req.user.id},
          include: [
            {
              model: User,
              as: "Statup"
            },
            {
              model: User,
              as: "Vendor"
            },
            { model: Message,
              as: "Messages" 
            }
          ]
        }
      ).then(function (rels) {
        res.json(rels);
        // let relUserIds = [];//collect counterpart user ids
        // let userStatus = {};//map counterpart user id -> rel status
        // let userRelId = {};
        // rels.forEach(nextRel => {
        //   relUserIds.push(nextRel[counterpartAttr]);
        //   userStatus[nextRel[counterpartAttr]] = nextRel.status;
        //   userRelId[netRel[counterpartAttr]] = nextRel.id;
        // });
        // db.User.findAll({ where: { id: { $in: relUserIds } } }).then(function (users) {
        //   users.forEach(usr2 => {
        //     usr2.status = userStatus[usr2.id];
        //     usr2.relId = userRelId[usr2.id];
        //   });
        //   res.json(users);
        // });
      });
    }
  });

  //create a relationship
  app.post("/api/relationship/:startupId/:vendorId", function (req, res) {
    if (!req.isAuthenticated()) {
      res.status(401).json(NOT_AUTH_MSG);
    }
    else {
      db.Relationship.create(
        {
          starupId: req.params.starupId,
          vendorId: req.params.vendorId,
          status: db.Relationship.REQUESTED
        }).then(function (newRel) {
          res.json("OK");
        });
    }
  });

  //change status of relationship
  app.put("/api/relationship/:id", function (req, res) {
    if (!req.isAuthenticated()) {
      res.status(401).json(NOT_AUTH_MSG);
    }
    else {
      db.Relationship.update(
        { status: db.Relationship.CONNECTED },
        {
          where: {
            id: req.params.id
          }
        }
      ).then(function (updatedRel) {
        res.json("OK");
      });
    }
  })

  //delete a relationship
  app.delete("/api/relationship:id", function (req, res) {
    if (!req.isAuthenticated()) {
      res.status(401).json(NOT_AUTH_MSG);
    }
    else {
      db.Relationship.remove({ where: { id: req.params.id } }).then(function () {
        res.json("OK");
      });
    }
  });

  //create a message
  app.post("/api/message:relationshipId", function (req, res) {
    if (!req.isAuthenticated()) {
      res.status(401).json(NOT_AUTH_MSG);
    }
    else {
      db.Message
        .create(
          {
            fromId: req.user.id,
            relationshipId: req.params.relationshipId,
            text: req.body
          })
        .then(function () {
          res.json("OK");
        });
    }
  });


  // Route for getting data about our user to be used client side
  app.get("/api/user", function (req, res) {
    console.log(req.user);
    res.json(new Date().toISOString());
  });

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


  app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });




};




let express  = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');
let User = require('../models/user');            // get an instance of the express Router
let config = require('../../config');
let acl = require('../permissions/permission');
router.post('/authenticate', function(req, res) { //to obtain token
  console.log("aunthenticate");
  // find the user
  User.findOne({
    username: req.body.username
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        let token = jwt.sign(user, config.secret, {
          expiresIn: 1440 // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          // user : user.name,
          message: 'Enjoy your token!',
          token: token
        });
      }
    }
  });
});

router.post('/users',function(req, res) {
        let user = new User();      // create a new instance of the User model
        user.username = req.body.username;  // set the users name (comes from the request)
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        // save the user and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);
            res.json({
              status : "ok",
	            data   : user._id
            });
        });
});

router.use(function(req, res, next) {
        console.log("use");
        let token = req.body.token || req.query.token || req.headers['x-access-token'];
        // decode token
        if (token) {
          // verifies secret and checks exp
          jwt.verify(token, config.secret, function(err, decoded) {
            if (err) {
              return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
              // if everything is good, save to request for use in other routes
              req.decoded = decoded;
              next();
            }
          });

        } else {

          // if there is no token
          // return an error
          return res.status(403).send({
              success: false,
              message: 'No token provided.'
          });
        }    // next(); // make sure we go to the next routes and don't stop here
});

router.get('/users',function(req, res) {  //show all users
            User.find(function(err, users) {
                if (err)
                    res.send(err);

                res.json({
                  status: "ok",
                  data : users
                });
            });
        });

router.get('/users/:username',function(req, res) { //show user by username
                User.findOne({username:req.params.username}, function(err, user) {
                    if (err)
                        res.send(err);
                        res.json({
                          status: "ok",
                          data : user
                        });
                });
            });

router.put('/users/:username',function(req, res) { //update user by username

               // use our user model to find the user we want
               User.findOne({username:req.params.username}, function(err, user) {
                   if (err)
                    res.send(err)
                   user.name = req.body.name;  // update the users name
                   // save the user
                   user.save(function(err) {
                       if (err)
                          res.send(err)
                       res.json({
                         status : "ok",
                         data   : user.user_id
                        });
                   });
               });
           });

router.delete('/users/:username',function(req,res) {
      User.findOneAndRemove({username:req.params.username}, function(err, user) {
          if(err)
            res.send(err)
          res.json({
	               status: "ok",
	               data :null
          })
        });
});

router.get('/', function(req, res) {
    res.json("hooray! welcome to our api");
});

module.exports = router;

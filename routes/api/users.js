const router = require('express').Router();
// const { body, validationResult } = require('express-validation/check')
let User = require('../../models/user.model');

//@route: GET api/users
//@desc: Test route
//@acess: public

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
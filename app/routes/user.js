const router = require('express').Router();
let User = require('../models/user.model');

router.route('/add').post((req,res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;

    const newuser = new User({first_name,last_name,email,password});
    newuser.save()
        .then(() => res.json("User added"))
        .catch(err => res.status(400).json("error:"+err));
});

module.exports = router;
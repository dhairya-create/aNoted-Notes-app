const router = require('express').Router();
let User = require('../models/user.model');

//bcrypt
const bcrypt=require('bcryptjs')

//responses
const responses=require("../utils/responses")

//validations
const validation=require('../validations/register.validation')

router.route('/register').post(async (req, res) => {
    try {
        let validate = await validation(req.body);
    
        if (validate.error) {
          return responses.badRequestResponse(
            res,
            validate.error.details[0].message
          );
        }
    
        let user =await User.findOne({
            $or: [
            {
              username: req.body.username
            }, {
              email: req.body.email
            }
          ]
        });
        console.log(user)
        if (user) {
          return responses.badRequestResponse(res, { err: "user Already exists." })
        }
        const salt = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash_password
    
        let new_user = await User.create(req.body)
        if (!new_user) {
          return responses.serverErrorResponse(res, "Error while creating user.")
        }
        return responses.successfullyCreatedResponse(res, new_user)
      } catch (error) {
        console.log(error)
        return responses.serverErrorResponse(res)
      }
});

router.route('/:username').get((req,res)=> {
    User.find({username:req.params.username})
   .then(user=>res.json(user))
   .catch(err=>res.status(400).json('Error' + err));
});

router.route('/updateUser/:id').put(async (req,res)=>{
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash_password
    User.findByIdAndUpdate(req.params.id,req.body)
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json('Error' + err));
})

router.route('/deleteUser/:id').delete((req,res)=> {
    User.findByIdAndRemove(req.params.id)
   .then(user=>res.json(user))
   .catch(err=>res.status(400).json('Error' + err));
});

router.route('/login/:username/:pwd').get(async(req,res)=> {
    const person=await User.findOne({username:req.params.username})
    res.json(person);
    console.log(person);
    if(person){
        bcrypt.compare(req.params.pwd,person.password,(err,res)=>{
            if(res){
                console.log("Login successfull");
            }
            else{
                console.log("Password is incorrect");
            }
        });
    }
    else{
        console.log("Username doesnt exist!!")
    }
});

module.exports = router;
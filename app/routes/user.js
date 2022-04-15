const router = require('express').Router();
let User = require('../models/user.model');

//bcrypt
const bcrypt=require('bcryptjs')

//responses
const responses=require("../utils/responses")

//validations
const validation=require('../validations/register.validation')

router.route('/login').post(async (req,res)=> {
  console.log('hello');
  User.findOne({username:req.body.username})
  .then(user=>{
    console.log(user);
    if(!user)
      return res.status(404).json({error:"No user found"})
    else{
      bcrypt.compare(req.body.password,user.password,(error,result)=>{
        if(error)
          return res.status(500).json(error)
        else if(result)
          return res.status(200).json(user)
        else
          return res.status(403).json({error:"Password is incorrect"})
      })
    }
  })
 .catch(error=>{
   res.status(500).json(error)
 })
});

router.route('/register').post(async (req, res) => {
    console.log("hello");
    try {
        console.log(req.body);
        console.log('call');
        // let validate = await validation(req.body);
    
        // if (validate.error) {
        //   return responses.badRequestResponse(
        //     res,
        //     validate.error.details[0].message
        //   );
        // }
    
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
        res.json({status: 'ok', username:req.body.username})
        console.log(new_user);
        if (!new_user) {
          return responses.serverErrorResponse(res, "Error while creating user.")
        }
        console.log("hello")
        return responses.successfullyCreatedResponse(res, new_user)
      } 
      catch (error) {
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
    User.findByIdAndUpdate(req.params.id,req.body)
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json('Error' + err));
})

router.route('/deleteUser/:id').delete((req,res)=> {
    User.findByIdAndRemove(req.params.id)
   .then(user=>res.json(user))
   .catch(err=>res.status(400).json('Error' + err));
});

module.exports = router;
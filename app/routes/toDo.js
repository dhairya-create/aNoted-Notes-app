const router = require('express').Router();
const ToDo = require('../models/toDo.model');

router.route('/add').post(async(req,res) => {
    const username = req.body.username;
    const title = req.body.title;
    const tasks = req.body.description;
    const description={tasks};
    let result=await ToDo.findOne({username:req.body.username,title:req.body.title})
    if(!result){
        const newToDo = new ToDo({username,title,description});
        newToDo.save()
            .then(() => res.json("ToDo added"))
            .catch(err => res.status(400).json("error:"+err));
    }
    else{
        res.json({err:"Title already exist"});
    }
});

router.route('/all/:username').get((req,res)=>{
    ToDo.find({user_id:req.params.username})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json(err);
    })
});

router.route('/searchByTitle/:userId/:title').get((req,res)=>{
    ToDo.find({user_id:req.params.userId,title:req.params.title})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json(err);
    })
});

router.route('/updateTodo/:id').put((req,res)=>{
    ToDo.findOneAndUpdate(req.params.id,req.body)
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json(err);
    })
})

router.route('/sortByTitle/:userId').get((req,res)=>{
    ToDo.find({user_id:req.params.userId}).sort({title:1})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json(err);
    })
});

router.route('/deleteToDo/:id').delete((req,res)=>{
    ToDo.findOneAndRemove(req.params.id)
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json(err);
    })
})

module.exports = router;
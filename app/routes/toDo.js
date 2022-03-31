const router = require('express').Router();
const ToDo = require('../models/toDo.model');

router.route('/add').post((req,res) => {
    const user_id = req.body.user_id;
    const title = req.body.title;
    const tasks = req.body.tasks;
    const description={tasks};
    const newToDo = new ToDo({user_id,title,description});
    newToDo.save()
        .then(() => res.json("ToDo added"))
        .catch(err => res.status(400).json("error:"+err));
});

router.route('/viewTodo/:userId').get((req,res)=>{
    ToDo.find({user_id:req.params.userId})
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
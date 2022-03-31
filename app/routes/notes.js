const router = require('express').Router();
let Notes = require('../models/notes.model');

router.route('/add').post((req,res) => { 
    const newNote = new Notes(req.body);
    newNote.save()
        .then(() => res.json("Notes added"))
        .catch(err => res.status(400).json("error:"+err));
});

router.route('/all/:userId').get((req,res)=>{
    Notes.find({user_id:req.params.userId}).sort({createdAt:-1})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json(err);
    })
});

router.route('/searchByTitle/:userId/:title').get((req,res)=>{
    Notes.find({user_id:req.params.userId,title:req.params.title})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json(err);
    })
});

router.route('/updateNotes/:id').put((req,res)=>{
    Notes.findOneAndUpdate(req.params.id,req.body)
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json(err);
    })
})

router.route('/sortByTitle/:userId').get((req,res)=>{
    Notes.find({user_id:req.params.userId}).sort({title:1})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json(err);
    })
});

router.route('/deleteNotes/:id').delete((req,res)=>{
    Notes.findByIdAndRemove(req.params.id)
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json(err);
    })
})

module.exports = router;
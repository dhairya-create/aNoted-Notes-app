const router = require('express').Router();
const diary = require('../models/diary.model');

router.route('/add').post((req,res) => { 
    const newDiary = new diary(req.body);
    newDiary.save()
        .then(() => res.json("Notes added"))
        .catch(err => res.status(400).json("error:"+err));
});

router.route('/searchByDate/:userId/:date').get((req,res)=>{
    diary.find({user_id:req.params.userId,diary_date:req.params.date})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json(err);
    })
});

router.route('/updateDiary/:id').put((req,res)=>{
    diary.findOneAndUpdate(req.params.id,req.body)
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json(err);
    })
})

router.route('/deleteDiary/:id').delete((req,res)=>{
    diary.findOneAndRemove(req.params.id)
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json(err);
    })
})

module.exports = router;
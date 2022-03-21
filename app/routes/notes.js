const router = require('express').Router();
let Notes = require('../models/notes.model');

router.route('/add').post((req,res) => {
    const user_id = req.body.user_id;
    const title = req.body.title;
    const description = req.body.description;
    const type = req.body.type;
    
    const newNote = new Notes({user_id,title,description,type});
    newNote.save()
        .then(() => res.json("Notes added"))
        .catch(err => res.status(400).json("error:"+err));
});

module.exports = router;
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

module.exports = router;
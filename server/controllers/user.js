import express from 'express';
import User from '../models/user';

const router = express.Router();

// POST for creating a new user
router.post('/create', function(req, res) {
    // console.log(req.body)
    const {username, password, email} = req.body.data;

    const userData = new User({
        username: username,
        password: password,
        email: email,
        created_at: new Date()    
    });

    console.log('-----------------')
    console.log(userData._id.toString())
    console.log('-----------------')
    
    userData.save(function(err, user) {
        if (err) throw err;
        console.log('eeeeeeeeeeee')
        console.log(user)
    })
})

// POST for user login
router.post('/login', function(req, res) {
    console.log(req.body)
    
})
export default router;
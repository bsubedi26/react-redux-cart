import express from 'express';
import User from '../models/user';
import bcrypt from 'bcryptjs';

const router = express.Router();

// POST for creating a new user
router.post('/create', function(req, res) {
    // console.log(req.body)
    const { username, password, email } = req.body.data;

    const userData = new User({
        username: username,
        password: password,
        email: email,
        created_at: new Date()    
    });

    userData.save(function(err, user) {
        if (err) throw err;
        
        res.json(user)
    })
})

router.get('/ajax', (req, res) => {
    console.log('session id', req.session.id);
    
})

// POST for user login
router.post('/login', function(req, res) {
    console.log(req.session)
    const { username, password } = req.body.data;

    User.findOne({username: username}, function(err, user) {
        if (err) throw err;
        if (!user) {
            console.log('no user found')
            res.json({
                message: 'No User Found'
            })
        }

        if (user) {
            bcrypt.compare(password, user.password, function(err, isMatch) {
                if (err) throw err;
                if (isMatch == true) {
                    console.log('right password')
                    req.session._id = user._id;
                    res.json(user);

                }
            });
        }
    })


    
    
})
export default router;
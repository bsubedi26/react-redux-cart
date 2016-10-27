import express from 'express';
import User from '../models/user';
var router = express.Router();

router.post('/create', function(req, res) {
    console.log(req.body)
    // //Instantiating the Model - An instance of Model represents a mongodb document
    // var userData = new User(req.body.user);
    // //Saving the model instance to the DB
    // userData.save(function(err) {
    //     if ( err ) throw err;
    //     console.log("User Saved Successfully"); 
    // }).then(function() {
	//     res.redirect('/');
    // });
    
})

export default router;
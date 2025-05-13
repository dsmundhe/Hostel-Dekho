const express = require('express');
const router = express.Router();

const { verifyToken } = require('../config/Authentication/varifyToken');
const{getData,registerHostel}=require('../controllers/hostelControllers');


//getData
router.get('/hostelsList',getData);

//register hostel
router.post('/register',registerHostel);

module.exports = router;
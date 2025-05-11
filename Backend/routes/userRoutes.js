const express=require('express');
const router=express.Router();

const {verifyToken}=require('../config/Authentication/varifyToken');

const {signUp,loginFun}=require('../controllers/loginAndSignup');

const {getData}=require('../controllers/getHostels');

const {deleteUser} =require('../controllers/editUserDetails');

//login signup
router.post('/signup',signUp);
router.post('/login',loginFun);

//get data
router.get('/data',verifyToken,getData);

//edit user details
router.delete('/delete',verifyToken,deleteUser);

 

module.exports=router;




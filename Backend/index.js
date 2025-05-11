const express=require('express');
const app=express();
const PORT=4000;

require('dotenv').config();

const userRouter=require('./routes/userRoutes');

/* The code `const {dbConnection}=require('./config/dbConnection/dbConnection'); dbConnection();` is
importing the `dbConnection` function from the file located at
`./config/dbConnection/dbConnection.js` and then immediately calling the `dbConnection` function. */
const {dbConnection}=require('./config/dbConnection/dbConnection');
dbConnection();


app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routers
app.use('/user',userRouter);


app.listen(PORT,()=>{
    console.log("Server started at PORT : "+PORT);
})
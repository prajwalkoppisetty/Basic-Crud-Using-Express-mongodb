const express=require('express');
const Mongoose=require('mongoose');
const { any } = require('webidl-conversions');

const app=express();
const port=3000;


app.use(express.json());

Mongoose.connect('mongodb://localhost:27017/CrudOperations',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('Connected To MongoDb 🚀')
})

.catch((err)=>{
    console.log('Error Connecting To MongoDb',err);
})
//schema
const userSchema=new Mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobilenumber:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

})

const User=Mongoose.model('User',userSchema);

//routes


app.get('/',(Req,Res)=>{
    Res.send('Hello,This is Basic Crud Operation Backend Server using Nodejs,Express and Mongoose');
})

//signup
app.post('/Signup',async(Req,Res)=>{
    try{
        const {
            name,
            email,
            mobilenumber,
            password
        }=Req.body;
        const NewUser=new User({
            name,
            email,
            mobilenumber,
            password
        })
        await NewUser.save();
        Res.status(201).json({
            message:'User Registered Successfully',
            user:NewUser
        })
    }
    catch(err){
         Res.status(500).json({
            message:'Error Registering User',
            error:err.message
         })
    }
})


//login
app.post('/login',async(Req,Res)=>{
    try{
        const {
            email,
            password
        }=Req.body;
        const user=await User.findOne({
            email,
            password
        })
        if(user){
            Res.status(200).json({
                message:'User Logged In Successfully',
                user
            })
        }
    }catch(err){
        Res.status(500).json({
            message:'Error Logging In User',
            error:err.message
        })
    }
})

//update user
app.put('/update/:id',async(Req,Res)=>{
    try{
        const {id}=Req.params;
        const updatedData=Req.body;
        const updatedUser=await User.findByIdAndUpdate(id,updatedData,{new:true});
        Res.status(200).json({
            message:'User Updated Successfully',
            user:updatedUser
        })
    }catch(err){
        Res.status(500).json({
            message:'Error Updating User',
            error:err.message
        })
    }
})

//delete user
app.delete('/delete/:id',async(Req,Res)=>{
    try{
        const {id}=Req.params;
        const deletedUser=await User.findByIdAndDelete(id);
        if(!deletedUser){
            return Res.status(404).json({
                message:'User Not Found'
            })
        }
        console.log(deletedUser);
        Res.status(200).json({
            message:'User Deleted Successfully',
            user:deletedUser
        })

    }catch(err){
        Res.status(500).json({
            message:'Error Deleting User',
            error:err.message
        })
    }
})


//server listening
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
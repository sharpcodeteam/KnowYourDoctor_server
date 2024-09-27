const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 20000,  // 20 seconds
            socketTimeoutMS: 45000, 
        });
        console.log(`db connected at: ${mongoose.connection.host}`);
    }
    catch(error){
        console.log(`MongoDB server issue: ${error}`);
    }
};

module.exports= connectDB;
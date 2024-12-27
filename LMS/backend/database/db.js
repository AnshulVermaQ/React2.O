import mongoose from "mongoose";

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected");
    }catch(e){
        console.log(e);
    }
}

export default connect;
import mongoose from "mongoose";

const claimSchema = new mongoose.Schema({

    points:{
        type: Number,
        required: true,
        min:1,
        max:10
    },
    claimedAt:{
        type: Date,
        default: Date.now
    }
})

const userSchema = new mongoose.Schema({

    userName:{
        type: String,
        required: true,
        unique: true
    },
    points:{
        type: Number,
        default: 0
    },
    history: [claimSchema]
})

const User = mongoose.model("User", userSchema);

export default User;
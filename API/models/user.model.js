import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:"String",
        unqiue: "true",
    }, 
    email: {
        type: "String",
        unique:"true",
    }, 
    password: {
        type: "String",
        unique:"true",
    },
});

const User = mongoose.model("User", userSchema);

export default User;

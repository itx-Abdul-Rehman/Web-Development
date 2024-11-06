import mongoose from "mongoose";

const wowSchema=mongoose.Schema({
    name:{type:String,required:true},
    rollno:{type:String,required:true}
});

export const Wow=mongoose.model('haha',wowSchema);
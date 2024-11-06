import mongoose from "mongoose";

const studentSchema=mongoose.Schema({
    name:{type:String,required:true},
    rollno:{type:String,required:true}
});

export const Student=mongoose.model('Student',studentSchema);
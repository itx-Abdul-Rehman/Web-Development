import mongoose from "mongoose";

const coureseScehma=mongoose.Schema({
    name:String,
    code:String,
});

export const Course=mongoose.model('Course',coureseScehma);
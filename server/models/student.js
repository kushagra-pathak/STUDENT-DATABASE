import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    RegNO : Number,
    NAME:String,
    GRADE:String,
    section:{
        type:String,
        default: 'A'
    }
});

const student = mongoose.model('student', studentSchema);

export default student;
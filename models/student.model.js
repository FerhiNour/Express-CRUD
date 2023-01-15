const mongoose=require('mongoose')

const studentSchema=mongoose.Schema({
    cin:Number,
    lastName:String,
    firstName:String,
    email:String
})

module.exports=mongoose.model('student',studentSchema)
const student= require('../models/student.model')

//add student
const addStudent= async(req,res)=>{
 try{
    const data= await student.create(req.body)
    res.status(201).json({data})
 }
 catch(error){
    console.log(error.message)
 }
}

//find all students
const findAllStudents= async(req,res)=>{
   try{
    const data= await student.find()
    res.status(201).json(data)
   }catch(error){
    console.log(error.message)
   }

}

//find single student
const findSingleStudent= async(req,res)=>{
    try{
        const data= await student.findOne({_id: req.params.id})
        res.status(201).json(data)
       }catch(error){
        console.log(error.message)
       }

}

//update student
const updateStudent= async(req,res)=>{
    try{
        const data= await student.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        )
        res.status(201).json(data)
       }catch(error){
        console.log(error.message)
       }

}

//delete student
const deleteStudent= async(req,res)=>{
    try{
        await student.findOneAndDelete({_id:req.params.id})
        res.status(201).json({message:"Student deleted"})
       }catch(error){
        console.log(error.message)
       }    

}

module.exports={addStudent,findAllStudents,findSingleStudent,updateStudent,deleteStudent}
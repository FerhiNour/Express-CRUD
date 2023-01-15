const express=require('express')
const router= express.Router()
const {addStudent,findAllStudents,findSingleStudent,updateStudent,deleteStudent}=require('../controllers/student.controller')

//add user
router.post('/students',addStudent)

//find all students
router.get('/students',findAllStudents)

//find single student
router.get('/students/:id', findSingleStudent)

//update student
router.put('/students/:id',updateStudent)

//delete student
router.delete('/students/:id',deleteStudent)





module.exports=router
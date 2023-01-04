const asyncHandler = require("express-async-handler")
const Goal = require("../models/goalModel")


const setGoal = asyncHandler(async(req, res) => {
    if (!req.body.text) {
    res.status(400)
    throw new Error ("Please add a text field")
    }

    const goal = await Goal.create({
        text : req.body.text
    })

    res.status(200).json(goal)
} )


const getGoals = asyncHandler(async(req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})


const updateGoal = asyncHandler( (req, res) => {
    // var query = req.query; 
    // console.log(query)
    res.status(200).json({ message: `Update goal ${res.param.id}` })
})




const deleteGoal = asyncHandler( (req, res) => {
    console.log(req.params.id)
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
})





module.exports = { getGoals, setGoal, updateGoal, deleteGoal } 
// Forma abreviada de importar interfaz Router()
const router = require("express").Router()
// la forma larga es asi
// const express = require("express")
// const router = express.Router()
const { getGoals,setGoal, updateGoal, deleteGoal } = require("../controllers/goalController")

router.get("/api/goals", getGoals)

router.post("/api/goals", setGoal)

router.put("/api/goals/:id", updateGoal)

router.delete("/api/goals/:id", deleteGoal)

module.exports = router
const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const {taskValidation,} = require("../validators/taskValidator");

const validate = require("../middleware/validate");

const {createTask,getTasks,getTask,updateTask,deleteTask,} = require("../controllers/taskController");

router.use(protect);

router.post("/", createTask);

router.get("/", getTasks);

router.get("/:id", getTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

router.post("/",taskValidation,validate,createTask);

module.exports = router;
// step-1 => importing express and Router

const express = require("express");
const router = express.Router();

// step-2 =>  importing function from the controller

const todoController = require("../controller/todo-controller.js");

// step-3 => define the function the you import from the controller on the route

router.post("/", todoController.createTodo);
router.get("/", todoController.getAll);
router.get("/:id", todoController.getOne);
router.get("/users/:userId", todoController.getUserTodos);
router.put("/:id", todoController.updateOne);
router.delete("/:id", todoController.deleteOne);

// Step-4 => export the router

module.exports = router;

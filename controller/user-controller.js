const usersModel = require("../models/user");

// create to dos function
const createUser = async (req, res) => {
  const user = req.body;
  // here we are using try and catch to handle the server error
  try {
    // the  parameters that you send in the body that wantch with the schema the only parameter will be saved

    const newUser = await usersModel.create(user);
    res.status(201).json({ message: " to do is saved ", data: newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Get all users
const getAllUsers = async (req, res) => {
  let limit = parseInt(req.params.limit);
  let skip = parseInt(req.params.skip);

  try {
    let users = await usersModel.find().limit(limit).skip(skip);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "something Went rong " });
  }
};
// Get user by : Id => but return the first name

const getOneUser = async (req, res) => {
  let id = req.params.id;
  //   console.log(id);
  try {
    let user = await usersModel.findOne({ _id: id }, "firstName");
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: "Cant find this ID " });
  }
};
// // update  by id :

const updateOneUser = async (req, res) => {
  let { id } = req.params;
  let { username } = req.body;
  try {
    let todos = await usersModel.updateOne({ _id: id }, { username: username });
    res.status(200).json({ message: "the todo is updated ", data: todos });
  } catch (err) {
    res.status(500).json({ message: " Error in update the document" });
  }
};

// // Delelte user by id :
const deleteOneUser = async (req, res) => {
  let { id } = req.params;
  try {
    let user = await usersModel.deleteOne({ _id: id });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: " Error in deleting the user  " });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  updateOneUser,
  deleteOneUser,
};

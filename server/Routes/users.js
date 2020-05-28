const express = require("express");
const router = express.Router();
const adminCheck = require("./admin");

const UserController = require('../controllers/user')

router.use(express.json());


// Get
router.get("/", adminCheck, UserController.get_all_users);

// Register user
router.post("/register", UserController.register_user);

// Login user
router.post("/login", UserController.login_user);

//Logout user
router.post("/logout", UserController.logout_user);

// Update user password
router.put("/:id", adminCheck, UserController.update_password_user);

//Update user role
router.put("/:id/:role", adminCheck, UserController.update_role_user);

// Delete user
router.delete("/:id", adminCheck, UserController.delete_user );

module.exports = router;

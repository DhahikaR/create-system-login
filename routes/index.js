import express from "express";
import {
  getUsers,
  Register,
  getUserById,
  updateUserById,
  deleteUser,
  Login,
  Logout,
} from "../controllers/users.js";

import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/refreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.get("/users/:id", verifyToken, getUserById);
router.post("/users/:id", verifyToken, updateUserById);
router.delete("/users/:id", verifyToken, deleteUser);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

export default router;

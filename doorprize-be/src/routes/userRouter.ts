import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  login,
  register,
  updateUser,
} from "../controller/user";

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/users", getUsers);
userRouter.put("/users/:id", updateUser);
userRouter.post("/users", createUser);
userRouter.delete("/users/:id", deleteUser);

export default userRouter;

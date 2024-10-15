import { Router } from "express";
import userRouter from "./userRouter";
import cloudinary from "../lib/cloudinary";
import doorprizeRouter from "./doorprizeRouter";

const router = Router();

cloudinary.config();

router.use("/", userRouter);
router.use("/", doorprizeRouter);
export default router;

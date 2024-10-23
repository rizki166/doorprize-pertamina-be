import { Router } from "express";
import userRouter from "./userRouter";
import doorprizeRouter from "./doorprizeRouter";

const router = Router();


router.use("/", userRouter);
router.use("/", doorprizeRouter);
export default router;

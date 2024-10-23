import { Router } from "express";
import {
  createDoorprize,
  deleteDoorprize,
  getDoorprize,
  updateDoorprize,
} from "../controller/doorprize";
import multerMiddleware from "../middleware/upload";

const doorprizeRouter = Router();

doorprizeRouter.post("/doorprize", multerMiddleware(), createDoorprize);
doorprizeRouter.get("/doorprize", getDoorprize);
doorprizeRouter.put("/doorprize/:id", multerMiddleware(), updateDoorprize);
doorprizeRouter.delete("/doorprize/:id", deleteDoorprize);

export default doorprizeRouter;

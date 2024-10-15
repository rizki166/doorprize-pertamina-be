import { Router } from "express";
import {
  createDoorprize,
  deleteDoorprize,
  getDoorprize,
  updateDoorprize,
} from "../controller/doorprize";

const doorprizeRouter = Router();

doorprizeRouter.post("/doorprize", createDoorprize);
doorprizeRouter.get("/doorprize", getDoorprize);
doorprizeRouter.put("/doorprize/:id", updateDoorprize);
doorprizeRouter.delete("/doorprize/:id", deleteDoorprize);

export default doorprizeRouter;

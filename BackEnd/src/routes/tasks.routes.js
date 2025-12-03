import { Router } from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controller.js";

import authMiddleware from "../middelwares/auth.js";

const router = Router();

router.get("/", authMiddleware, getTasks);
router.post("/", authMiddleware, createTask);
router.patch("/:id", authMiddleware, updateTask);
router.delete("/:id", authMiddleware, deleteTask);

export default router;

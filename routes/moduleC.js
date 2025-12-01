import express from "express";
import {
  getAll,
  createOne,
  getOne,
  deleteOne,
  updateOne,
} from "../controllers/moduleC.js";

const router = express.Router();

router.get("/", getAll);
router.post("/", createOne);
router.get("/:id", getOne);
router.delete("/:id", deleteOne);
router.put("/:id", updateOne);

export default router;

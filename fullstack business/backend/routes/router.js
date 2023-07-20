import express from "express";
import {
  getDB,
  addDB,
  updateDB,
  deleteDB,
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/", getDB);

router.post("/", addDB);

router.put("/:id", updateDB);

router.delete("/:id", deleteDB);

export default router;

import { getUser,claimPoints,addUser,claimedHistory } from "../controller/UserController.js";
import express from "express";

const router = express.Router();

router.get("/", getUser);
router.post("/", addUser);
router.post("/:id/claim", claimPoints);
router.get("/:id/history", claimedHistory);

export default router;
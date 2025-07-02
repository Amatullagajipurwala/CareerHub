import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";
 
const router = express.Router();

router.route("/apply/:id").get(isAuthenticated, applyJob);   //job ni id apply
router.route("/get").get(isAuthenticated, getAppliedJobs);
router.route("/:id/applicants").get(isAuthenticated, getApplicants);   //job id thi badha applicants
router.route("/status/:id/update").post(isAuthenticated, updateStatus);   //accepted rejectes update by application id
 

export default router;


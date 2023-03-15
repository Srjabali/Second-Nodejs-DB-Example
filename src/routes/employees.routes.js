import { Router } from "express";
import { getEmployees } from "../controllers/employees.controller.js";

const router = Router();

router.get('/employees', getEmployees);

export default router;
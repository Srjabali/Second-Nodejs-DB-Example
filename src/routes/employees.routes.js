import { Router } from "express";
import { getEmployees, createEmployees } from "../controllers/employees.controller.js";

const router = Router();

router.get('/employees', getEmployees);
router.post('/employees', createEmployees);

export default router;
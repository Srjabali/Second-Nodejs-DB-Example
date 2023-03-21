import { Router } from "express";
import { getEmployees, getEmployee, createEmployees } from "../controllers/employees.controller.js";

const router = Router();

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployee);
router.post('/employees', createEmployees);

export default router;
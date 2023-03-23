import { Router } from "express";
import { getEmployees, getEmployee, createEmployees, deleteEmployee } from "../controllers/employees.controller.js";

const router = Router();

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployee);
router.post('/employees', createEmployees);
router.delete('/employees/:id', deleteEmployee);

export default router;
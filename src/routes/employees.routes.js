import { Router } from "express";
import { getEmployees, getEmployee, createEmployees, deleteEmployee, updateEmployee } from "../controllers/employees.controller.js";

const router = Router();

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployee);
router.post('/employees', createEmployees);
router.delete('/employees/:id', deleteEmployee);
router.patch('/employees/:id', updateEmployee);

export default router;
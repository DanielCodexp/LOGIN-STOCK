import { Router } from "express";
import { ReportsController } from './../controller/Reports.Controller';



const router = Router();

// get all reports
router.get('/', ReportsController.getAll);

//Create Reports
router.post('/', ReportsController.new)


export default router;

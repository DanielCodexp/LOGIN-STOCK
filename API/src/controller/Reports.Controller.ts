import { Request, Response } from "express"
import { getRepository } from "typeorm";
import { tbrevisar } from "../entity/Reports";




export class ReportsController {

  static getAll = async (req: Request, res: Response) => {
    const userRepository = getRepository( tbrevisar);
    let reports = await userRepository.find();


  if(reports.length>0) {
    res.send(reports);
  } else {
    res.status(404).json({ message: 'Not result' });
  }

  }

  static new = async (req: Request, res: Response) => {
    const {cCodPrd, dtFecReg , cCuePer, nRevPrd  } = req.body;
    const reports = new tbrevisar();
    reports.cCodPrd = cCodPrd;
    reports. dtFecReg =  dtFecReg;
    reports.cCuePer = cCuePer;
    reports. nRevPrd =  nRevPrd;
  }


}

export default ReportsController;

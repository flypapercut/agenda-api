import { ZodError } from "zod";

import {Request, Response, NextFunction} from "express"

export function errorHandling(error:any,req:Request,res:Response,_:NextFunction){

  if(error instanceof ZodError){
    return res.status(400).json({message: "validation error", issues: error.format()})
  }

}
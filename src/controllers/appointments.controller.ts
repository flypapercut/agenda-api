import {Request, Response, NextFunction} from "express"

class AppointmentsController{

  index(request:Request, response:Response, next:NextFunction){
    console.log("index")

    return response.status(200).send("index")
  }

  indexByDate(request:Request, response:Response, next:NextFunction){
    console.log("indexByDate")

    return response.status(200).send("index DATE")
  }

}


export {AppointmentsController}
import {Request, Response, NextFunction} from "express"

class AppointmentsController{
  // returns all appointments
  index(request:Request, response:Response, next:NextFunction){
    console.log("index")

    return response.status(200).send("index")
  }
  // returns appointments of certain dates
  indexByDate(request:Request, response:Response, next:NextFunction){
    console.log("indexByDate")

    const date = request.params.date

    return response.status(200).send(`index date ${date}`)
  }

}


export {AppointmentsController}
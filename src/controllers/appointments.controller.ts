import {Request, Response, NextFunction} from "express"
import {appointmentSchema} from "../validators/appointmentSchema"
import {knexConfig as knex} from "@/database/knex"
import { Appointment } from "@/models/Appointment"

import {v4 as uuidv4} from "uuid"

class AppointmentsController{
  // returns all appointments
  async index(request:Request, response:Response, next:NextFunction){  
    try {
    
      console.log("index")

      const appointments = await knex<Appointment>("appointments").select()

      return response.status(200).json(appointments)
    }
    catch (error) {
      next(error)
    }
  }


  // returns appointments of certain dates
  async indexByDate(request:Request, response:Response, next:NextFunction){
    try {
    
      console.log("index")

      const {date} = request.params

      const appointments = await knex<Appointment>("appointments").select().whereLike("date", date)

      return response.status(200).json(appointments)
    }
    catch (error) {
      next(error)
    }
  }

  async create(request:Request, response:Response, next:NextFunction){
    try {
      
      

      const {title, description, date, time} = appointmentSchema.parse(request.body)

      const id = uuidv4()

      //await knex<AppointmentRepository>("appointments").insert({id, title, description, date, time})
      await knex<Appointment>("appointments").insert({id, title, description, date, time})

      return response.status(201).json()
    } 
    catch (error) {
      next(error)
    }
  }

  async remove(request:Request, response:Response, next:NextFunction){
    try {
      
      const {id} = request.params

      await knex<Appointment>("appointments").delete().where("id", id)

      return response.status(200).json({id})
    } 
    catch (error) {
      next(error)
    }

  }

}


export {AppointmentsController}
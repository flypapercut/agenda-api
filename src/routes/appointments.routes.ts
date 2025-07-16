import { AppointmentsController } from "@/controllers/appointments.controller"
import { Router } from "express"

const appointmentsRoutes = Router()

const appointmentsController = new AppointmentsController()

appointmentsRoutes.get("/", appointmentsController.index)
appointmentsRoutes.get("/:date", appointmentsController.indexByDate)
appointmentsRoutes.post("/", appointmentsController.create)
appointmentsRoutes.put("/:id")
appointmentsRoutes.delete("/:id", appointmentsController.remove)


export {appointmentsRoutes}
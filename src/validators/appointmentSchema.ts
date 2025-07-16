import {z} from "zod"

export const appointmentSchema = z.object({
  title: z.string({ required_error: "title is required"}).min(4, {message: "name is too short"}),
  description: z.string().optional(),
  date: z.string({required_error: "date is required"}),
  time: z.string().optional(),
})
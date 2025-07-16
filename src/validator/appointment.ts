import {z} from "zod"

export const appointmentSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  date: z.string(),
  time: z.string().optional()
})
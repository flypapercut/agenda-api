import express from "express"
import cors from "cors"

import {routes} from "./routes"
import { errorHandling } from "./middlewares/error_handling"


const app = express()

app.use(express.json())

app.use(cors())


app.use(routes)

app.use(errorHandling)



app.listen(3333, () => {console.log("running agenda on port 3333")})
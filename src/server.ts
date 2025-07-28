import express from "express"
import cors from "cors"

import {routes} from "./routes"
import { errorHandling } from "./middlewares/error_handling"


const app = express()

app.use(express.json())

app.use(cors())

// cors
// app.use((req, res, next)=>{
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next()
// })
//


app.use(routes)

app.use(errorHandling)



app.listen(3333, () => {console.log("running agenda on port 3333")})
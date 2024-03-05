import { Router } from "express";
import planetsRoutes from "./planets.js"

const router = Router()

//         Home page (http://localhost:3000/api)

router.get("/", (req,res) => res.send("This is the API root!"))


//            Routes that were imported to
//                -(routes/planets.js)-
//                      from
//              -(controllers/planets.js)-

router.use( "/planets", planetsRoutes )

export default router;
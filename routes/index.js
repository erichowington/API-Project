import { Router } from "express";
import planetsRoutes from "./planets.js"

const router = Router()

router.get("/", (req,res) => res.send("This is the API root!"))

router.use( "/planets", planetsRoutes )

export default router;
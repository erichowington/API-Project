import { Router } from "express"
import * as controllers from "../controllers/planets.js"

const router = Router()

//All Planets and their data.
router.get("/", controllers.getPlanets);

//One Planet and it's data.
router.get("/:id", controllers.getPlanet);

//Create a new planet.
router.post("/", controllers.createPlanet);

//Updata existing planet.
router.put("/:id", controllers.updatePlanet);

//Delete existing planet.
router.delete("/:id", controllers.deletePlanet);


export default router;
const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");
const router = Router();

router.get("/", controllers.getPlanets);
router.get("/:_id", controllers.getPlanet);
router.post("/",middlewares.planetValidation ,controllers.createPlanet);
router.delete("/:_id", controllers.deletePlanet);
router.put("/", controllers.updatePlanet);


module.exports = router;
const { Router } = require("express");
const controllers = require("../controllers")
const router = Router();
const middlewares = require("../middlewares")

router.get("/", controllers.getCharacters);
router.get("/:_id", controllers.getCharacter);
router.get("/:name", middlewares.characterValidation, controllers.getCharacterByName);
router.post("/", middlewares.characterValidation, controllers.createCharacter);
router.delete("/:_id", controllers.deleteCharacter);
router.put("/", controllers.updateCharacter);


module.exports = router;
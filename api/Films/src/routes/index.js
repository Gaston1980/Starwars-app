const { Router } = require("express");
const controllers = require("../controllers")
const middlewares = require("../middlewares")
const router = Router();

router.get("/", controllers.getFilms);
router.get("/:_id", controllers.getFilm);
router.post("/",middlewares.filmValidation ,controllers.createFilm);
router.delete("/:_id", controllers.deleteFilm);
router.put("/",controllers.updateFilm);

module.exports = router;
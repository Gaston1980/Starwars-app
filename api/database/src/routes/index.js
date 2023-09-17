const {Router} = require("express");
const store = require("../database");//le pongo el nombre que yo quiero y ahi me traigo el objeto que estoy exportando en database/index.js (los modelos con sus metodos)
const {validateModel,validateId_Name} = require("../middlewares")
const controllers = require("../controllers")
const router = Router();

//Asi usando /:model me sirve para todos los modelos que haya
router.get("/:model",validateModel,controllers.getAll)

router.get("/:model/:_id",validateModel,controllers.getOne)


router.post("/:model",validateModel,validateId_Name,controllers.createOne)

router.delete("/:model/:_id",validateModel,controllers.deleteOne)

router.put("/:model",controllers.updateOne)

module.exports = router;

const router = require("express").Router();

const itemsController = require("../controllers/itemsController");
const brandsController = require("../controllers/manufactorersController");

router.use("/items", itemsController);
router.use("/brands", brandsController);

module.exports = router;

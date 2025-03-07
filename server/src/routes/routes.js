const router = require("express").Router();

const itemsController = require("../controllers/itemsController");

router.use("/items", itemsController);

module.exports = router;

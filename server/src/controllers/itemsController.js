const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "Works" });
});

module.exports = router;

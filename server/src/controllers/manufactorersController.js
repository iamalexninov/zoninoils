const router = require("express").Router();
const Manufactorer = require("../models/ManufacturerModel");

router.post("/create", async (req, res) => {
  // todo: update with try catch block
  //const existingBrand = await Manufactorer.find({ name: req.body.name });
  //if (existingBrand) throw new Error("Already Exists.");

  const brand = new Manufactorer({
    name: req.body.name,
    logo: req.body.logo,
    description: req.body.description,
    website: req.body.website,
    country: req.body.country,
    active: req.body.active,
  });

  await brand.save();
  res.status(201).json({ msg: "Successfully created new Brand.", item: brand });
});

router.get("/", async (req, res) => {
  const brands = await Manufactorer.find({});
  res.status(200).json(brands);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const galeriService = require("../services/galeriService");

/* GET */
router.get("/", async function (req, res, next) {
  try {
    res.json(await galeriService.getGaleri(req.query.page));
  } catch (err) {
    console.error(`Error saat memuat galeri `, err.message);
    next(err);
  }
});

/* POST */
router.post("/", async function (req, res, next) {
  try {
    res.json(await galeriService.postGaleri(req.body));
  } catch (err) {
    console.error(`Error saat membuat galeri`, err.message);
    next(err);
  }
});

module.exports = router;

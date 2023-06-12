const express = require("express");
const router = express.Router();
const penginapanService = require("../services/penginapanService");

/* GET */
router.get("/", async function (req, res, next) {
  try {
    res.json(await penginapanService.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error saat memuat penginapan `, err.message);
    next(err);
  }
});

/* POST */
router.post("/", async function (req, res, next) {
  try {
    res.json(await penginapanService.create(req.body));
  } catch (err) {
    console.error(`Error saat membuat penginapan`, err.message);
    next(err);
  }
});

module.exports = router;

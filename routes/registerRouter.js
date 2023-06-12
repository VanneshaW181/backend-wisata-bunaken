const express = require("express");
const router = express.Router();
const registerService = require("../services/registerService");
/* GET */
router.get("/", async function (req, res, next) {
    try {
      res.json(await registerService.getregister(req.query.page));
    } catch (err) {
      console.error(`Error`, err.message);
      next(err);
    }
  });

router.post("/", async function (req, res, next) {
    try {
      res.json(await registerService.postregister(req.body));
    } catch (err) {
      console.error(`Error`, err.message);
      next(err);
    }
  });
  
  module.exports = router;
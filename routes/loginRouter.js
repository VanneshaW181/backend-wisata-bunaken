const express = require("express");
const router = express.Router();
const loginService = require("../services/loginService");
/* GET */
router.getlogin("/", async function (req, res, next) {
    try {
      res.json(await loginService.getlogin(req.query.page));
    } catch (err) {
      console.error(`Error`, err.message);
      next(err);
    }
  });

router.postlogin("/", async function (req, res, next) {
    try {
      res.json(await loginService.postlogin(req.body));
    } catch (err) {
      console.error(`Error`, err.message);
      next(err);
    }
  });
  
  module.exports = router;
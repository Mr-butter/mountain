const express = require("express");
const path = require("path");
const { Club, User, clubHashtag } = require("../models");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const uploads = await Club.findAll({
      include: {
        model: User,
        attributes: ["id", "nick"],
      },
      order: [["createdAt", "DESC"]],
    });
    res.render("clubdetail", {
      title: "mountain",
      twits: uploads,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
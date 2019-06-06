const router = require("express").Router();
const User = require("./../models/user");
const service = require("./../services/user");
const passport = require("passport");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./public/img/",
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

var upload = multer({ storage: storage });

router.post("/signup", upload.array("imgs", 10), (req, res, next) => {
  service
    .signup(req.body)
    .then(result => {
      console.log("result", result);
      res.json(result);
    })
    .catch(err => {
      console.log({ err });
    });
});

router.post("/login", (req, res, next) => {
  service.login(req.body).then(result => {
    console.log("result", result);
    res.json(result);
  });
});

router.post(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json("profile ne");
  }
);

module.exports = router;

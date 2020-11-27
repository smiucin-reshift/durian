const express = require('express');
const router = express.Router();

const cp = require('child_process');
const path = require("path");

router.get('/cmd', function(req, res) {
  
  const args = process.argv.slice(2);
  const script = path.join(__dirname, 'bin', 'main.js');
  cp.execSync(`node ${script} ${args.join(' ')}"`); // BAD

});

function cleanupTemp() {
  let cmd = "rm -rf " + path.join(__dirname, "temp");
  cp.execSync(cmd); // BAD
}

module.exports = router;

const express = require('express');
const router = express.Router();

const cp = require('child_process');

router.get('/cmd', function(req, res) {
  
  const args = process.argv.slice(2);
  const script = path.join(__dirname, 'bin', 'main.js');
  cp.execSync(`node ${script} ${args.join(' ')}"`); // BAD

});


module.exports = router;

const pg = require('pg');
const pool = new pg.Pool(config);
const express = require('express');
const router = express.Router();




// http://localhost:3000/eval?code=this.process.env
router.get('/handle', function(req, res) {
  // BAD: the category might have SQL special characters in it
  var query1 = "SELECT ITEM,PRICE FROM PRODUCT WHERE ITEM_CATEGORY='"
             + req.params.category + "' ORDER BY PRICE";
  pool.query(query1, [], function(err, results) {
    // process results
  });

  // GOOD: use parameters
  var query2 = "SELECT ITEM,PRICE FROM PRODUCT WHERE ITEM_CATEGORY=$1"
             + " ORDER BY PRICE";
  pool.query(query2, [req.params.category], function(err, results) {
      // process results
  });
});

module.exports = router;

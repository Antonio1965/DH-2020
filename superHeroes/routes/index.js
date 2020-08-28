var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut consequuntur sapiente culpa itaque vel totam eligendi soluta delectus, a rem hic! Iure eaque consectetur magnam suscipit velit hic tempora quaerat officiis? Sapiente fugiat rerum repellat! Omnis magni harum provident, quasi nemo perspiciatis dolores veritatis sit rem distinctio laboriosam ab dicta!");
})

module.exports = router;

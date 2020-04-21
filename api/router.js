const express = require('express');
const router = express.Router();

router.get('/', (req, resp) => {
  resp.send('Troop server is running and serving files and services.');
});

module.exports = router;
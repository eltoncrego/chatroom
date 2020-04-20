const express = require('express');
const router = express.Router();

router.get('/', (req, resp) => {
  resp.send('server is up and running');
});

router.get('/join/messages', (req, resp) => {
  resp.send('hi');
});

module.exports = router;
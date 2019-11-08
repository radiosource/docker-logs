const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');


router
    .get('/list/', indexController.getContainersList)
    .get('/container/', indexController.getContainerById)
    .get('/ping', async (req, res) => res.status(200).send('pong'))
;

module.exports = router;

const express = require('express');
const predictionController = require('./predictionController');

const router = express.Router();

router.post('/predict', predictionController.predict);

module.exports = router;

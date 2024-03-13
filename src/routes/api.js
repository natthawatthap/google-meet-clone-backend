// src/routes/api.js

const express = require('express');
const router = express.Router();
const controller = require('../controllers/exampleController');

router.get('/example', controller.getExample);
router.post('/example', controller.postExample);

module.exports = router;

const express = require('express');
const router = express.Router();
//const ensureLoggedIn = require('../../config/ensureLoggedIn')
const dayCtrl = require('../../controllers/api/days');

//router.post('/', dayCtrl.getThisDay);
router.post('/', dayCtrl.createDate);
router.get('/', dayCtrl.getThisMonth);

module.exports = router;
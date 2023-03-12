const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const taskCtrl = require('../../controllers/api/tasks');

router.post('/', taskCtrl.createTasks, ensureLoggedIn);

module.exports = router;
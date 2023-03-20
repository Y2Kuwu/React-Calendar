const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const taskCtrl = require('../../controllers/api/tasks');

router.post('/', taskCtrl.createTask, ensureLoggedIn);
router.get('/:id', taskCtrl.getOneDay, ensureLoggedIn);

module.exports = router;
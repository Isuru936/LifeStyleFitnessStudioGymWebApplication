const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// POST route to create a new message
router.post('/CreateMsg', createMessage);

module.exports = router;

// routes/userRoutes.js
const express = require('express');
const { saveUser } = require('../controllers/userController');

const router = express.Router();

router.post('/save-user', saveUser); // POST /api/save-user

module.exports = router;

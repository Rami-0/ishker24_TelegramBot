const { Router } = require('express');

const router = new Router();

const userController = require('../controller/user.controller');
const serverMiddleware = require('../middlewares/serverMiddleware');

router.post('/set_auth', serverMiddleware, userController.setAuth);

router.put('/update_chat_id', serverMiddleware, userController.update_chat_id);

module.exports = router;

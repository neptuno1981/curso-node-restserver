const { Router } = require('express');

const { rolesPost,rolesGet } = require('../controllers/roles');

const router = Router();

router.get('/', rolesGet);

router.post('/', rolesPost);

module.exports = router;
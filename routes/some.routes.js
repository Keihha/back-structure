const {Router} = require('express');

const router = Router();
const {responser} = require('./../controllers/some.controller')

router.get('/example', [], responser);


module.exports = router;
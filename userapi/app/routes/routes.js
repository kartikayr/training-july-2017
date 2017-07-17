let express  = require('express');
let router = express.Router();
let ctrl = require('../controller/controller');

router.post('/authenticate', ctrl.getToken);
router.get('/', ctrl.check);
router.post('/users',ctrl.addUser);
router.delete('/users/:username',ctrl.deleteUser);
router.use(ctrl.authUser);
router.get('/users',ctrl.admin,ctrl.getAll);
router.get('/users/:username',ctrl.admin,ctrl.getByName);
router.put('/users/:username',ctrl.user,ctrl.updateUser);
module.exports = router;

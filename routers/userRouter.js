const router = require('express').Router();
const UserController = require('../controllers/usercontroller');

//Ruta de alta de usuario
router.post('/signup', UserController.signup);

//Ruta de login de usuario
router.post('/login', UserController.login);


//Ruta de perfil de usuario
router.get('/profile/:email', UserController.getByEmail);


//Ruta de baja de usuario
router.delete('/deleteUser', UserController.delete);



module.exports = router;

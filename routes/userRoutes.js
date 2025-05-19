import express from 'express'
import { userLogin, userRegister } from '../controllers/userController.js';
import { not_allowed } from '../utils/not_allowed.js';
import { joiValidator, loginSchema, registerSchema } from '../utils/validators.js';



const router = express.Router();


router.route('/login').post(joiValidator.body(loginSchema), userLogin).all(not_allowed);
router.route('/register').post(joiValidator.body(registerSchema), userRegister).all(not_allowed);


export default router;
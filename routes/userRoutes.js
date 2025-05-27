import express from 'express'
import { getUserProfile, updateProfile, userLogin, userRegister } from '../controllers/userController.js';
import { not_allowed } from '../utils/not_allowed.js';
import { joiValidator, loginSchema, registerSchema } from '../utils/validators.js';
import { userCheck } from '../middlewares/userCheck.js';



const router = express.Router();


router.route('/login').post(joiValidator.body(loginSchema), userLogin).all(not_allowed);
router.route('/register').post(joiValidator.body(registerSchema), userRegister).all(not_allowed);


router.route('/profile').get(userCheck, getUserProfile).patch(userCheck, updateProfile).all(not_allowed)


export default router;
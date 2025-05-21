import express from 'express';
import { addProduct, getAllProducts, getSingleProduct, removeProduct, updateProduct } from '../controllers/productController.js';
import { not_allowed } from '../utils/not_allowed.js';
import { file_check, update_file_check } from '../middlewares/file_check.js';
import { adminCheck, userCheck } from '../middlewares/userCheck.js';



const router = express.Router();

// product_routes

router.route('/').get(getAllProducts).post(userCheck, adminCheck, file_check, addProduct).all(not_allowed);

router.route('/:id').get(getSingleProduct).patch(userCheck, adminCheck, update_file_check, updateProduct).delete(userCheck, adminCheck, removeProduct).all(not_allowed);


export default router;



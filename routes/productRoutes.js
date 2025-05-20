import express from 'express';
import { addProduct, getAllProducts, getSingleProduct, removeProduct, updateProduct } from '../controllers/productController.js';
import { not_allowed } from '../utils/not_allowed.js';
import { file_check, update_file_check } from '../middlewares/file_check.js';
import { userCheck } from '../middlewares/userCheck.js';



const router = express.Router();

// product_routes

router.route('/').get(userCheck, getAllProducts).post(file_check, addProduct).all(not_allowed);

router.route('/:id').get(getSingleProduct).patch(update_file_check, updateProduct).delete(removeProduct).all(not_allowed);


export default router;



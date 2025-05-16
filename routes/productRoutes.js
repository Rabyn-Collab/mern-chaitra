import express from 'express';
import { addProduct, getAllProducts, getSingleProduct, removeProduct, updateProduct } from '../controllers/productController.js';
import { not_allowed } from '../utils/not_allowed.js';



const router = express.Router();

// product_routes

router.route('/products').get(getAllProducts).post(addProduct).all(not_allowed);

router.route('/products/:id').get(getSingleProduct).patch(updateProduct).delete(removeProduct).all(not_allowed);


export default router;




// products get post filter  sorting
// products/:id get patch delete
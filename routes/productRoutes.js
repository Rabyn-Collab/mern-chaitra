import express from 'express';



const router = express.Router();


router.route('/products').get((req, res) => {
  return res.status(200).json({ messgage: 'products' });
}).post((req, res) => {
  return res.status(200).json({ messgage: 'products' });
});


export default router;




// products get post filter  sorting
// products/:id get patch delete
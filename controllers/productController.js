import Product from "../models/Product.js";

//all products query
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json(products);
  } catch (err) {
    return res.status(400).json({ messgage: `${err}` });

  }
}

//single product query
export const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.findById(id);
    return res.status(200).json(products);
  } catch (err) {
    return res.status(400).json({ messgage: `${err}` });

  }
}


//create product
export const addProduct = (req, res) => {
  return res.status(200).json({ messgage: 'products' });
}

//update product
export const updateProduct = (req, res) => {
  return res.status(200).json({ messgage: 'products' });
}


//remove product
export const removeProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    return res.status(200).json({ message: 'product successfully removed' });
  } catch (err) {
    return res.status(400).json({ messgage: `${err}` });

  }
}
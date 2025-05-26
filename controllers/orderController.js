import Order from "../models/Order.js";


export const getOrders = async (req, res) => {
  try {

    if (req.role === 'Admin') {
      const orders = await Order.find({});
      return res.status(200).json(orders);
    } else {
      const orders = await Order.find({ userId: req.userId }).select('-orderItems');
      return res.status(200).json(orders);
    }
  } catch (err) {
    return res.status(400).json({ messgage: `${err}` });

  }
}


export const getOrderDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    return res.status(200).json(order);
  } catch (err) {
    return res.status(400).json({ messgage: `${err}` });
  }
}

export const createOrder = async (req, res) => {
  const { totalAmount, orderItems } = req.body
  try {
    const order = await Order.create({
      userId: req.userId,
      orderItems,
      totalAmount
    });
    return res.status(200).json('order successfully created');
  } catch (err) {
    return res.status(400).json({ messgage: `${err}` });
  }
}
import jwt from 'jsonwebtoken';





export const userCheck = (req, res, next) => {

  const token = req.headers?.authorization;
  const decode = jwt.decode(token, 'secret');
  if (!decode) return res.status(401).json({ message: 'you are not authorized' });
  req.userId = decode.id;
  req.role = decode.role;
  return next();

}
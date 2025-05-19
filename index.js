import express from 'express';
import morgan from 'morgan';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import cors from 'cors';

const app = express();

mongoose.connect('mongodb+srv://facebookteams900:pass900@cluster0.siz9npg.mongodb.net/Shopy').then((val) => {
  app.listen(5000, () => {
    console.log('database connected and listening')
  })

}).catch((err) => {
  console.log(err);
})

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use(fileUpload({
  limits: { fileSize: 5 * 1024 * 1024 },
}));

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Welcome to Backened'
  })
});


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);



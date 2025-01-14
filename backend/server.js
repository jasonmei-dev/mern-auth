import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  connectDB();
  console.log(`Server started on port ${port}`);
});

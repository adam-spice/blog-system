import CookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import { CLIENT_URL, MONGO_URI, PORT, __PROD__ } from './settings.js';
import cors from 'cors';
import mongoose from 'mongoose';

// routes
import blogRoutes from './routes/blog.js';
import authRoutes from './routes/auth.js';

// app
const app = express();

// db
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Database Connected'));

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(CookieParser());

//cors
if (!__PROD__) {
  app.use(
    cors({
      origin: CLIENT_URL,
    })
  );
}

// routes middleware
app.use('/api', blogRoutes);
app.use('/api', authRoutes);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

export default app;

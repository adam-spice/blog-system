import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;

export const __PROD__ = process.env.NODE_ENV === 'production';

export const CLIENT_URL = process.env.CLIENT_URL;

export const MONGO_URI = process.env.MONGO_URI;

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './routes/index.js';

// Load environment variables from .env file
dotenv.config();
const app = express();

// Middleware setup

app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*', // Adjust as needed for security
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(morgan('dev')); // Logging middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connect to Database
mongoose.connect(process.env.MONGO_URI ).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err); 
})

// Create Server
const PORT = process.env.PORT || 8080;


app.get('/', async(req, res) => {
  res.status(200).json('Hello, World!');
})
//Auth Routes
app.use('/api-v1', router);

// Root Path Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
})
// Root Path Not Found Middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});


// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


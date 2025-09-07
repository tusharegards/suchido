import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// Middleware setup
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/home', (req, res) => {
  res.send('sdllo, World!');
})
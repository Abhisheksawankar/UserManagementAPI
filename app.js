// app.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./db');
const userRoutes = require('./userRoutes');

dotenv.config();
connectDB();

// const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

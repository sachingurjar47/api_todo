require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Add this for CORS
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
connectDB();

app.use(cors()); // Enable CORS
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

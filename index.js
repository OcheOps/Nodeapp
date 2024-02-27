const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 


const dbURI = process.env.MONGODB_URI 
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

const app = express();

app.use(express.json());

const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

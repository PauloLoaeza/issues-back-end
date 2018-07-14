import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';

import issuesRouter from './routes/issues';

const app = express();

// Middlewares
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', issuesRouter);

// Starting mongoose
mongoose.connect('mongodb://localhost/issues');
mongoose.connection.once('open', () => {
  console.log('MongoDB running...');
});

// Starting server
app.listen(3000, err => {
  if (!err) console.log('Server running at port 3000...');
});
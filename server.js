import express from 'express';
import dotenv from 'dotenv';

// db and authenticate user
import connectDB from './db/connect.js';

const app = express();
const port = process.env.PORT || 4000;

dotenv.config();

// routers
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

// middleware
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the server!</h1>');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    // Server will start only if connection to DB is successful
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

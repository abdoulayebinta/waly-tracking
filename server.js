import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';

dotenv.config();

// middleware
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the server!</h1>');
});

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

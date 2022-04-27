import express from 'express';
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  throw new Error('error');
  res.send('<h1>Welcome to the server</h1>');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});

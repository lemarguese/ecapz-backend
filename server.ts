import * as express from 'express';
import 'dotenv/config';

import cardRouter from './api/routers/card';

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use('/card', cardRouter);

app.listen(PORT, () => {
  console.log('Server is listening on port: ', PORT);
})

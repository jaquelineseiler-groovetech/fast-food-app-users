import 'dotenv/config';
import { app } from './app';
import { connectMongo } from './config/mongo.connection';

const port = process.env.PORT || 3333;

connectMongo().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});




// require("dotenv").config();
// require("dotenv").config();
// console.log(process.env.DB_HOST);
// console.log(process.env.DB_PASSWORD);
import { join } from 'path';
import express from 'express';
import morgan from 'morgan';
import cors from "cors";
import routes from './routes';
import stateRouting from './middleware/routing.mw';
import configurePassport from './config/passport';

const CLIENT_PATH = join(__dirname, '../../client');

let app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(CLIENT_PATH));
app.use(express.json());

configurePassport(app);

app.use('/api', routes);

app.use(stateRouting);

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

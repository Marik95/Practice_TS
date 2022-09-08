import express, {Request, Response} from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(cookieSession({keys: ['asdfasdfasdf']}));
app.use(router);

app.listen(3001, () => {
    console.log('Listening on port 3001...')
})
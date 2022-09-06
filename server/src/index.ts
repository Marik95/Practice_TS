import express, {Request, Response} from 'express';
import { router } from './routes/loginRoutes';

const app = express();

// app.get('/', (req: Request, res: Response) => {
//     res.send(
//         `
//             <div>
//                 <h1>Hey there!</h1>
//             </div>
//         `
//     )
// });

app.use(router);

app.listen(3001, () => {
    console.log('Listening on port 3001...')
})
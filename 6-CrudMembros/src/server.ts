/* eslint-disable quotes */
/* eslint-disable indent */
import Express from 'express';
import UserController from './controllers/UserController';

const app = Express();
app.use(Express.json());
const PORT = 3000;

app.get('/', (request,response) => {
    return response.send({message: "Hellowrold"});
});

app.post('/createUser', UserController.createUser);

app.listen(PORT, ()=> console.log('Servidor rodando'));



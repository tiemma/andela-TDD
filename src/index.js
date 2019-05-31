import express from 'express';
import logger from 'morgan';

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const URL_PREFIX = '/api/v1';
const port = 3000;
const resp = {
    data: {'name': 'hello'},
    status: 200,
    message: 'This is your name!'
}

app.get(`${URL_PREFIX}/hello`, 
    (req, res) => res.status(200).json(resp)
);

app.get(`${URL_PREFIX}/hellossss`, 
    (req, res) => res.status(200).json(resp)
);

app.get(`${URL_PREFIX}/hellosssssss`, 
    (req, res) => res.status(200).json(resp)
);

app.listen(port);

export default app;

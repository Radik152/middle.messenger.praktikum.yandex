/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

app.use(express.static(`${__dirname}/dist`));

app.use('/', (request, response) => {
    response.sendFile(`${__dirname}\\dist\\index.html`);
});

app.get('/profile', (request, response) => {
    response.sendFile(`${__dirname}\\dist\\index.html`);
});

app.get('/chats', (request, response) => {
    response.sendFile(`${__dirname}\\dist\\index.html`);
});

app.get('/auth', (request, response) => {
    response.sendFile(`${__dirname}\\dist\\index.html`);
});

app.get('/registration', (request, response) => {
    response.sendFile(`${__dirname}\\dist\\index.html`);
});

app.get('/changeProfile', (request, response) => {
    response.sendFile(`${__dirname}\\dist\\index.html`);
});

app.get('/changePassword', (request, response) => {
    response.sendFile(`${__dirname}\\dist\\index.html`);
});

app.get('/500', (request, response) => {
    response.sendFile(`${__dirname}\\dist\\index.html`);
});

app.listen(PORT, () => {
    console.log(`Application listening on http://localhost:${PORT}!`);
});

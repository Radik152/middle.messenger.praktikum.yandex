import path from 'path';
import express from 'express';
import {fileURLToPath} from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

app.use(express.static(__dirname + "/dist"));

app.use("/", function(request, response){

    response.sendFile(__dirname + `\\dist\\index.html`);
});

app.get("/profile", function(request, response){

    response.sendFile(__dirname + `\\dist\\index.html`);
});

app.get("/chats", function(request, response){

    response.sendFile(__dirname + `\\dist\\index.html`);
});

app.get("/auth", function(request, response){

    response.sendFile(__dirname + `\\dist\\index.html`);
});

app.get("/registration", function(request, response){

    response.sendFile(__dirname + `\\dist\\index.html`);
});

app.get("/changeProfile", function(request, response){

    response.sendFile(__dirname + `\\dist\\index.html`);
});

app.get("/changePassword", function(request, response){

    response.sendFile(__dirname + `\\dist\\index.html`);
});

app.get("/500", function(request, response){

    response.sendFile(__dirname + `\\dist\\index.html`);
});

app.listen(PORT, () => {
    console.log(`Application listening on http://localhost:${PORT}!`)
});

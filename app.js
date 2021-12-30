const dotenv = require("dotenv")
dotenv.config()
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const appJWT = require('jsonwebtoken')
const {errorHandler} = require("./helpers/error_helper");
const database = require('./database/database');
const api = require('./routes/api')
const {jwt} = require('./helpers/jwt_helper');

const app = express();
const server = http.createServer(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use(jwt());

app.use('/api/', api);

app.use(errorHandler);

const port = process.env.PORT || 3000;
server.listen(port, (e) => {
    console.log(`listening on port ${port}`);
});

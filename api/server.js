const express = require('express');
require('dotenv').config();
const connectDB = require('./db');
const cookieParser = require("cookie-parser");
const passport = require('passport')
const testController = require('./controllers');
const cors = require('cors');
require('./auth')

const app = express();

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser());

const port = process.env.PORT || 8000

connectDB()

app.get(
    '/', 
    passport.authenticate('jwt', { session: false }), 
    testController.getTasks
);
app.post('/register', testController.register);
app.post('/login', testController.login);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});
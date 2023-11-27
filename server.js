const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config()

connectDb();
const app = express();

const port = process.env.PORT || 5000

//embeded middleware
app.use(express.json());

//Api endpoints to get contacts
app.use('/api/contacts', require('./routes/contactRoutes'))

// Api authentication to get users 
app.use('/api/users', require('./routes/userRoutes'))

// to control middleware
app.use(errorHandler)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
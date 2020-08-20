const express = require('express');
require('dotenv').config()
const userRouter = require('./routers/user');
const classRouter = require('./routers/class')
const overlayRouter = require('./routers/overlay')
const port = process.env.PORT;
require('./db/db');
const path = require('path')

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(classRouter);
app.use(overlayRouter);

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
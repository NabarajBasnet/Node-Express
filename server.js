const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
})

app.use('/api/users',require('./routes/userRoutes'))
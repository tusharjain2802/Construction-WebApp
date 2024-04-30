const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const contactRoutes = require('./routes/contactRoutes');
const connectDB = require('./db');
require('dotenv').config();
connectDB();

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/contact', contactRoutes);

app.listen(process.env.PORT || 5000, function() {
    console.log(`Server started on port ${process.env.PORT || 5000}`);
});

const express = require('express');
const data = require('./data.json');
const app = express();

app.use(express.json());

//VBS HTTP

app.get('/entity/:id', function (req, res) {

});
app.get('/entity', function (req, res) {
    res.json(data);

});

app.put('/entity/:id', function (req, res) {

});
app.delete('/entity/:id', function (req, res) {

});
app.listen(3000, function () {
    console.log('Server is running on http://localhost:3000/entity');
});

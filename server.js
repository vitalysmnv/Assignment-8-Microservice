'use strict';

const PORT = 8000;

const express = require("express");
const { range } = require('express/lib/request');
const app = express();


app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));

const fs = require('fs');

app.post("/temp", (req,res) =>{
    const json = {
        curr_unit : req.body.curr_unit,
        curr_temp : req.body.curr_temp,
        new_unit : req.body.new_unit,
    };

    const value = JSON.stringify(json);

    const message = value;
    res.send(message); 
    fs.writeFile('temp.txt', message, err => {
        if (err) {console.error(err)}
    });
    return false;
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
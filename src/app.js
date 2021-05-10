const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
const MensRanking = require('../src/models/schema.js');

require("../src/db/conn.js")

//We are sending the data
app.post("/men",async (req, res) => {
    try{
            const mensRecord = new MensRanking(req.body);
            console.log(req.body);
            const insertMen = await mensRecord.save();
            res.statusCode(201).send(insertMen);
    }
    catch(e){
        res.statusCode(400).send(e);
    }
});

//We are reading the request
app.get("/men", async (req, res) => {
    try{
        
            const getMen = await MensRanking.find({}).sort({ranking : 1});
            res.send(getMen);
    }
    catch(e){
        res.statusCode(400).send(e);
    }
});

// we are now finding by id 

app.get("/men/:id", async (req, res) => {
    try{
            const _id = req.params.id;
            const getMens = await MensRanking.findById(_id);
            res.send(getMens);
    }
    catch(e){
        res.statusCode(400).send(e);
    }
});

// we are now finding and updating
app.patch("/men/:id", async (req, res) => {
    try{
            const _id = req.params.id;
            const getMens = await MensRanking.findByIdAndUpdate(_id,req.body,{new : true});
            res.send(getMens);
    }
    catch(e){
        res.statusCode(500).send(e);
    }
});

// We are now deleting the data

app.delete("/men/:id", async (req, res) => {
    try{
            const _id = req.params.id;
            const getMens = await MensRanking.findByIdAndDelete(_id);
            res.send(getMens);
    }
    catch(e){
        res.statusCode(400).send(e);
    }
});

app.listen(port ,() =>{ 
    console.log(`Listening at port ${port}`);
});
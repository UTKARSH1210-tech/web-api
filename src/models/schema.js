const express =  require('express');
const mongoose = require('mongoose');

const schMen = new mongoose.Schema(
    {
        ranking:{
            type:Number,
            unique:true,
            require:true
        },
        name:{
            type:String,
            trim:true,
            require:true
        },
        dob:{
            type:Date,
            require:true,
            trim:true
        },
        country:{
            type:String,
            require:true,
            trim:true
        },
        score:{
            type:Number,
            require:true,
            trim:true
        },
        event:{
            type:String,
            default: "100m"
        },
    }
);

const MensRanking = new mongoose.model("MensRanking" , schMen);

module.exports = MensRanking;
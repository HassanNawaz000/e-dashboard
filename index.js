//const { response } = require("express");
//import express from "express"


const express = require('express');

const app= express();
app.get("/",(req, resp)=>{
    resp.send("App is working")
})


app.listen(5000, test)


function test(){
    console.log("5000 port working")
    console.log("5001 port working")
}
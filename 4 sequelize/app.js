#!/usr/bin/env node

// Dependencies
var config=require("./config.js");
var Sequelize=require("sequelize");
var sequelize=new Sequelize(config.name,config.user,config.password,{
    host:config.host,
    dialect:"mssql",
    pool: {max:5,min:0,idle:10000}
});

sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.log('Unable to connect to the database: '+err.message);
    })
    .finally(function(){
        
    });

console.log("Hello. I test the Sequelize ORM library.");
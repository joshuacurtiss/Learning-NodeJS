#!/usr/bin/env node

// Sample Function
function sampleUsage()
{
    Emp.findAll({ where: {fname:'John'}, order: 'lname' }).then(function(emps) {
        emps.forEach(function(e){
            console.log(`${e.get('fname')} ${e.get('lname')}`);
        });
    });
}

// Dependencies
var env = process.env.NODE_ENV || 'development';
var config=require(__dirname + "/config.json")[env];
var Sequelize=require("sequelize");
var sequelize=new Sequelize(config.name,config.user,config.password,{
    host:config.host,
    dialect:config.dialect,
    pool: {max:5,min:0,idle:10000}
});

// Init Model
var Emp = sequelize.define('emp', {
    id:             {type: Sequelize.STRING,    field: 'eID',      primaryKey: true},
    fname:          {type: Sequelize.STRING,    field: 'eFName'},
    lname:          {type: Sequelize.STRING,    field: 'eLName'},
    mname:          {type: Sequelize.STRING,    field: 'eMName'},
    nickname:       {type: Sequelize.STRING,    field: 'eNickname'},
    positiontitle:  {type: Sequelize.STRING,    field: 'ePosTitle'},
    enddate:      {type: Sequelize.DATE,        field: 'eEndDate'}
},{
    timestamps:false,
    tableName:'empdir'
});
Emp.sync().then(function () {
    console.log("Emp sync done.");
    sampleUsage();
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
import express from "express";
import bodyParser from "body-parser";
// import { dirname } from 'path';
import path from 'path';
const __dirname = path.resolve();

// var express = require("express");
var app = express();
// var bodyParser = require("body-parser");
// const https = require("https");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, 'public')));
const port = 3001;
// var mysql = require("mysql2");
// const { json } = require("body-parser");
// var connection = mysql.createConnection({
//   localhost: "3306",
//   user: "root",
//   password: "Hemanth@123",
//   database: "git_hub_usernames",
// });
app.get("/", function (req, res) {
  res.render("index");
});
// app.post("/update", function (req, res) {
//   var person = {
//     user_name: req.body.data1,
//   };
  // https.get('https://api.github.com/users/HemanthPaila', function(response){
  //   response.on('data', function(data){
  //     var json=data.toString();
  //     var gitData=JSON.parse(json);
  //     console.log(gitData);
  //   });
  // });
  // var end_result = connection.query(
  //   "INSERT INTO data SET ?",
  //   person,
  //   function (err, result) {
  //     if (err) throw err;
      // console.log(result);
//     }
//   );
//   res.render("index");
// });
app.listen(port, function () {
  console.log(`server is running at port number ${port}`);
});

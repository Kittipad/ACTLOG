const express = require('express');
const app = express.Router();
var mysql = require('mysql');
const database = require("./db_config");
var bcrypt = require('bcryptjs');
const { getToken, verifyToken } = require('./jwtHandler');

// --------------------------------------------

const result_failed = {
  result: "failed",
  data: ""
};

app.post('/register', (req, res) => {
  console.log(req.body);
  const obj = req.body;
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  req.body.password = hashedPassword;

  var values = [
    [req.body.username, req.body.password, req.body.userType]
  ];
  var sql = `INSERT INTO users (username, password, userType) VALUES ?`;
  database.conn.query(sql, [values], function (err, result) {
    if (err) {
      res.json(result_failed);
    } else {
      const finalResult = {
        result: "success",
        data: ""
      };
      res.json(finalResult);
      console.log("1 record inserted");
    }
  });
});

app.post('/login', (req, res) => {
  console.log(req.body);
  const obj = req.body;

  var sql = `SELECT 
             id,             
             username, 
             password,
             userType 
             FROM users 
             where username = '${req.body.username}'`;

  database.conn.query(sql, function (err, result) {
    if (err) {
      res.json(result_failed);
    } else {
      if (result.length > 0) {
        const passwordIsValid = bcrypt.compareSync(req.body.password, result[0].password);
        if (!passwordIsValid) return res.json(result_failed);

        var _username = result[0].username;
        var _id = result[0].id;

        var token = getToken({ id: _id, username: _username })

        const finalResult = {
          result: "success",
          data: token,
        };

        console.log(JSON.stringify(finalResult));
        res.json(finalResult);
      } else {
        const finalResult = {
          result: "failed",
          data: ""
        };
        console.log(JSON.stringify(finalResult));
        res.json(finalResult);
      }
    }
    console.log("1 record inserted");
  });
});

app.get('/feed', verifyToken, (req, res) => {
  res.json({ result: "success" })
});

app.get('/detail', verifyToken, (req, res) => {
  console.log(req.body)
  const obj = req.body

  var sql = `SELECT 
            id,
            fname,
            lname 
            FROM detail 
            where username = '${req.body.username}'`

  database.conn.query(sql, function (err, result) {
    if (err) {
      res.json(result_failed)
    } else {
      const finalResult = {
        result: 'detail success'
      }
      console.log(JSON.stringify(finalResult))
      res.json(finalResult)
    }
  })
})

module.exports = app;
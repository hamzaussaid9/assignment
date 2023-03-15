const express = require("express");
const bodyParser = require("body-parser");
const port = 1500;

const app = express();
app.use(bodyParser.json({ extended: true }));
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  database: "mydatabase",
  user: "myuser",
  password: "myuserpassword",
});

app.get("/init", (req, res) => {
  connection.query(`CREATE DATABASE postdb`, function (error, result) {
    if (error) console.log(error);
  });

  connection.query(`USE postdb`, function (error, results) {
    if (error) console.log(error);
  });

  connection.query(
    `CREATE TABLE posts (id int unsigned NOT NULL auto_increment, topic varchar(100) NOT NULL, data varchar(100) NOT NULL, PRIMARY KEY (id)`,
    function (error, result) {
      if (error) console.log(error);
    }
  );
});

app.post("/addPost", (req, res) => {
  var topic = req.body.topic;
  var data = req.body.data;

  connection.query(`USE postdb`, function (error, results) {
    if (error) console.log(error);
  });

  //var querry = `INSERT INTO posts (topic, data) VALUES ('${topic}', '${data}')`;

  connection.query(
    `INSERT INTO posts (topic, data) VALUES ('${topic}', '${data}')`,
    function (error, result) {
      if (error) {
        console.log(error);
      }
    }
  );
  res.send("ok");
});

app.get("/getPosts", (req, res) => {
  connection.query(`USE postdb`, function (error, results) {
    if (error) console.log(error);
  });

  connection.query(`SELECT * FROM posts`, function (error, result) {
    if (error) {
      console.log(error);
      res.send({ result: "error" });
    } else {
      console.log(result.length);
      res.send(result);
    }
  });
});



app.listen(port, async () => {
    try {
        await connection.connect();
        
    } catch (error) {
        console.log(error);
    }
    console.log(`Started server`)
});

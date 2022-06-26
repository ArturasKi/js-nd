const express = require("express"); // užkrauna biblioteką;
const app = express(); // pasakom, jog biblioteka vadinasi app;
const port = 3003; // pasako kuriam port'e veiks;
const cors = require("cors");
app.use(cors());
const mysql = require("mysql");

app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.json());
  
  const con = mysql.createConnection({
    // daromas connection prie DB
    host: "localhost",
    user: "root",
    password: "",
    database: "kolt",
  });

  app.listen(port, () => {
    console.log(`Raccoon is listening to ${port}`);
  });


  //READ
  app.get("/kolts", (req, res) => {
    // get - routeris, paimam info is serverio;
    const sql = `
    SELECT
    *
    FROM kolts
    `;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    });
    
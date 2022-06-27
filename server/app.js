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

//CREATE
app.post("/kolts", (req, res) => {
  const sql = `
    INSERT INTO kolts
    (regCode, isBusy, lastTimeUsed, totalRideKilometres)
    VALUES (?, ?, ?, ?)
        `;
  con.query(
    sql,
    [req.body.regCode, req.body.isBusy, req.body.lastTimeUsed, req.body.totalRideKilometres],
    (err, result) => {
      if (err) throw err;
      res.send({ result, msg: { text: 'Scooter has been created!', type: 'success' }}); // gaunamas ats iš serverio;
    }
  );
});

//DELETE
app.delete("/kolts/:scooterId", (req, res) => {
  const sql = `
  DELETE FROM kolts
  WHERE id = ?
  `;
  con.query(sql, [req.params.scooterId], (err, result) => {
    if (err) throw err;
    res.send({ result, msg: { text: 'Scooter has been deleted!', type: 'success' }}); 
  });
});

//EDIT
app.put("/kolts/:scooterId", (req, res) => {
  const sql = `
  UPDATE kolts
  SET isBusy = ?, lastTimeUsed = ?, totalRideKilometres = ?
  WHERE id = ?
  `;
  con.query(sql, [req.body.isBusy, req.body.lastTimeUsed, req.body.totalRideKilometres, req.params.scooterId], (err, result) => {
    if (err) throw err;
    res.send({ result, msg: { text: 'Scooter has been edited!', type: 'success' }});
  });
});

// PAYLOAD -> rodo, ką išsiuntėme į serverį;

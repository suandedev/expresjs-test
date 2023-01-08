const express = require("express");
const { Pool } = require("pg");
const app = express();

// Create a connection pool
const pool = new Pool({
  user: "kqsolgkb",
  host: "kandula.db.elephantsql.com",
  database: "kqsolgkb",
  password: "U-rgtl4PpHg3iRXjXfhI5nc_11h6BglQ",
  port: 5432,
});


app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  // Execute a SELECT query
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) throw error;

    res.send(results.rows);
  });
});

app.listen(2000, function () {
  console.log("Example app listening on port 3000!");
});

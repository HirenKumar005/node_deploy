const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000
const db = mysql.createConnection({
  host: 'bnorca3wrur2z3r9ujv2-mysql.services.clever-cloud.com',
  user: 'uv0lgzccxmpx7yyt',
  password: 'wzBvDMhWupTWDJk1KvP3',
  database: 'bnorca3wrur2z3r9ujv2'
});
db.connect((err) => {
  if (err) {
      throw err;
  }
  console.log('MySql Connected...');
});

app.get('/post',(req,res)=>{
  db.query('SELECT * FROM posts ', async (err, result) => {
    if (result) {
        res.status(200).send(result)
    }
    else {
        res.status(400).send('data not found')
    }
});
})
app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
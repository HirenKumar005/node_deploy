const express = require('express')
const mysql = require('mysql')
const mongoose = require('mongoose')
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
mongoose.connect('mongodb://unovziwckjgwp57we3qo:fxmwrpxaaC9WN3pWD1s7@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bxiipt5opbkbu6c?replicaSet=rs0')
        .then(() => console.log('Mongodb Concted...'))
        .catch(err => console.log('Database Not concted...', err));

const userSchema = new mongoose.Schema({
          name: {
              type: String,
              required: true
          }
      });
const User = mongoose.model('User', userSchema);
app.get('/user', async(req,res)=>{
  const user = await User.find();
  if (user) {
    res.status(200).send(user)
  }
else {
    res.status(400).send('data not found')
}
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
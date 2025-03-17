// server.js

const express = require('express');
const cors = require('cors');

const app = express()
const PORT = 3000;

let data = { message: '여러분 화이팅!' };

app.use(cors({
  origin: "http://127.0.0.1:9000",
  methods: ['OPTIONS', 'POST', 'GET', 'PUT', 'DELETE'],
}))

app.use(express.json())

app.options('/', (req, res) => {
  return res.send();
})

app.get('/', (req, res) => {
  return res.json(data);
})

app.post('/', (req, res) => {
  data.message = req.body.message;
  return res.send(`받은 POST 데이터: ${req.body.message}`);
})

app.put('/', (req, res) => {
  data.message = req.body.message;
  return res.send(`업데이트된 데이터: ${req.body.message}`);
})

app.delete('/', (req, res) => {
  data = {};
  return res.send('데이터가 삭제되었습니다.');
})


app.listen(3000, () => {
  console.log('서버가 http://localhost:3000/ 에서 실행 중입니다.');
});

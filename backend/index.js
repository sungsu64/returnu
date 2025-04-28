const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ Node.js 서버 정상 작동 중!');
});

app.listen(port, () => {
  console.log(`🚀 서버 실행됨: http://localhost:${port}`);
});

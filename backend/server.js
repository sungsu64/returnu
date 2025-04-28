const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = 8090;

app.use(cors());
app.use(express.json());

// ✅ MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // 너의 MySQL 사용자명
  password: '1234',    // 너의 MySQL 비밀번호
  database: 'returnu', // 너의 데이터베이스 이름
});

// ✅ MySQL 연결
connection.connect((err) => {
  if (err) {
    console.error('❌ MySQL 연결 실패:', err);
    return;
  }
  console.log('✅ MySQL 연결 성공!');
});

// ✅ 분실물 수령 완료 처리 API
app.post('/api/claim-item', (req, res) => {
  const { itemId, claimantName } = req.body;

  if (!itemId || !claimantName) {
    return res.status(400).send("필수 정보가 없습니다.");
  }

  const query = 'UPDATE lost_items SET claimed_by = ?, claimed_at = NOW() WHERE id = ?';
  connection.query(query, [claimantName, itemId], (err, results) => {
    if (err) {
      console.error('❌ 수령 처리 실패:', err);
      return res.status(500).send('서버 에러');
    }
    res.status(200).send('수령 완료');
  });
});

// ✅ 분실물 목록 가져오기 API
app.get('/api/lost-items', (req, res) => {
  const query = 'SELECT * FROM lost_items ORDER BY id DESC';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('❌ 분실물 목록 조회 실패:', err);
      return res.status(500).send('서버 에러');
    }
    res.json(results); // 여러 개를 배열로 반환
  });
});

// ✅ 분실물 등록 API
app.post('/api/lost-item', (req, res) => {
  const { title, location, date, description } = req.body;

  if (!title || !location || !date || !description) {
    return res.status(400).send('필수 항목이 누락되었습니다.');
  }

  const query = 'INSERT INTO lost_items (title, location, date, description) VALUES (?, ?, ?, ?)';
  connection.query(query, [title, location, date, description], (err, results) => {
    if (err) {
      console.error('❌ 분실물 등록 실패:', err);
      return res.status(500).send('서버 에러');
    }
    res.status(201).send('분실물 등록 완료');
  });
});



// ✅ 분실물 상세 정보 조회 API
app.get('/api/lost-item/:id', (req, res) => {
  const itemId = req.params.id;

  const query = 'SELECT * FROM lost_items WHERE id = ?';
  connection.query(query, [itemId], (err, results) => {
    if (err) {
      console.error('❌ 분실물 조회 실패:', err);
      return res.status(500).send('서버 에러');
    }
    if (results.length === 0) {
      return res.status(404).send('분실물을 찾을 수 없습니다.');
    }
    res.json(results[0]); // 하나만 응답
  });
});

// ✅ 서버 실행
app.listen(port, () => {
  console.log(`🚀 서버 실행됨: http://localhost:${port}`);
}); //server.js


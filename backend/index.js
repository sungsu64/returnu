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
  user: 'root',            // 보통 기본 계정은 root (필요하면 'bban'으로 수정)
  password: '1234',        // 네가 설정한 비밀번호
  database: 'returnu',        // 사용할 데이터베이스 이름
  port: 3306               // 포트도 명시해줌 (필수는 아니지만 깔끔하게)
});

// ✅ MySQL 연결 시도
connection.connect((err) => {
  if (err) {
    console.error('❌ MySQL 연결 실패:', err);
    return;
  }
  console.log('✅ MySQL 연결 성공!');
});

// 테스트용 API (루트 경로)
app.get('/', (req, res) => {
  res.send('✅ Node.js 서버 정상 작동 중!');
});

// ✅ users 테이블이 없을 경우 대비해서 안전하게 쿼리
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('❌ users 테이블 조회 실패:', err.message);
      return res.status(500).send('서버 에러: users 테이블을 찾을 수 없습니다.');
    }
    res.json(results);
  });
});

// 서버 실행
app.listen(port, () => {
  console.log(`🚀 서버 실행됨: http://localhost:${port}`);
});

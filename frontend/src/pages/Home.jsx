import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🏠 리턴유 - 분실물 관리</h1>
      <input type="text" placeholder="물건 이름을 검색하세요" />
      <br /><br />
      <button onClick={() => navigate('/lost/register')}>📝 분실물 등록</button>
      &nbsp;&nbsp;
      <button onClick={() => navigate('/found/list')}>📦 습득물 목록</button>
    </div>
  );
}

export default Home;

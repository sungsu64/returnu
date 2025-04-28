import React from "react";
import { useNavigate } from "react-router-dom"; // 👈 페이지 이동

function LostListPage() {
  const navigate = useNavigate();

  const dummyLostItems = [
    { id: 1, title: "검정색 지갑", location: "학생회관 1층", date: "2024-05-01" },
    { id: 2, title: "은색 아이패드", location: "도서관 3층", date: "2024-05-02" },
    { id: 3, title: "회색 후드티", location: "식당 앞", date: "2024-05-03" },
  ];

  const goToDetailPage = (id) => {
    navigate(`/lost-detail/${id}`); // 물건 클릭 시 상세 페이지로 이동
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>분실물 목록</h1>
      <div style={styles.list}>
        {dummyLostItems.map((item) => (
          <div key={item.id} style={styles.card} onClick={() => goToDetailPage(item.id)}>
            <h2>{item.title}</h2>
            <p>습득 장소: {item.location}</p>
            <p>등록일: {item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "30px",
    textAlign: "center",
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    width: "250px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
    cursor: "pointer", // 클릭할 수 있는 느낌
  },
};

export default LostListPage;

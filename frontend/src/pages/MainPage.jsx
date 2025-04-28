import React from "react";
import { useNavigate } from "react-router-dom"; // 👈 페이지 이동용

function MainPage() {
  const navigate = useNavigate(); // 👈 useNavigate 훅 사용

  const goToLostList = () => {
    navigate("/lost-list"); // 👉 클릭 시 분실물 목록 페이지로 이동
  };

  return (
    <div style={styles.container}>
      {/* 상단 로고 */}
      <div style={styles.header}>
        <span style={styles.logoText}>returnu</span>
      </div>

      {/* 메인 콘텐츠 */}
      <div style={styles.wrapper}>
        <h1 style={styles.title}>무엇을 찾고 계신가요?</h1>
        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            style={styles.searchInput}
          />
          <button style={styles.searchButton}>검색</button>
        </div>

        {/* 👇 여기 추가 */}
        <button style={styles.lostListButton} onClick={goToLostList}>
          분실물 목록 보기
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  header: {
    position: "absolute",
    top: "20px",
    left: "20px",
  },
  logoText: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ff6f00",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "150px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
  },
  searchInput: {
    width: "400px",
    height: "50px",
    padding: "0 20px",
    fontSize: "1.2rem",
    borderRadius: "10px 0 0 10px",
    border: "1px solid #ccc",
    outline: "none",
  },
  searchButton: {
    height: "50px",
    padding: "0 20px",
    fontSize: "1.2rem",
    backgroundColor: "#ff6f00",
    color: "white",
    border: "none",
    borderRadius: "0 10px 10px 0",
    cursor: "pointer",
  },
  lostListButton: {
    marginTop: "20px",
    padding: "12px 24px",
    fontSize: "1.2rem",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  },
};

export default MainPage;

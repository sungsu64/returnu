import React from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  const goToLostList = () => {
    navigate("/lost-list");
  };

  return (
    <div style={styles.container}>
      {/* 상단 영역 */}
      <div style={styles.header}>
        <span style={styles.logoText}>returnu</span>
        {/* 👉 오른쪽에 분실물 목록 보기 버튼 추가 */}
        <button style={styles.lostListButton} onClick={goToLostList}>
          분실물 목록 보기
        </button>
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
    display: "flex",               // 👈 수정
    justifyContent: "space-between", // 👈 수정
    alignItems: "center",            // 👈 수정
    padding: "20px",
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
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#ffa726",   // 👈 기존보다 자연스러운 주황 계열로 변경
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};  //메인페이지

export default MainPage;

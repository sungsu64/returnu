import React from "react";

function MainPage() {
  return (
    <div style={styles.container}>
      {/* 상단 왼쪽 로고 */}
      <div style={styles.header}>
        <span style={styles.logo}>returnu</span>
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
    position: "absolute",
    top: "20px",
    left: "20px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ff6f00", // 원하는 색으로 변경 가능 (예: 주황색)
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
};

export default MainPage;

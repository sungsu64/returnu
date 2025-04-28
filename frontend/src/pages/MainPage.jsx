import React from "react";

function MainPage() {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>무엇을 찾고 계신가요?</h1>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        style={styles.searchInput}
      />
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // 화면 전체 높이
    backgroundColor: "#f5f5f5", // 배경색 약간 밝게
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  searchInput: {
    width: "500px",
    height: "50px",
    padding: "0 20px",
    fontSize: "1.2rem",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
  },
};

export default MainPage;

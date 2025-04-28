function App() {
  return (
    <div style={{ 
      backgroundColor: "#121212", 
      minHeight: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center" 
    }}>
      <input 
        type="text" 
        placeholder="검색어를 입력하세요" 
        style={{
          width: "500px",
          height: "50px",
          borderRadius: "25px",
          border: "none",
          padding: "0 20px",
          fontSize: "18px"
        }}
      />
    </div>
  );
}

// 👇 이거 꼭 필요!!
export default App;

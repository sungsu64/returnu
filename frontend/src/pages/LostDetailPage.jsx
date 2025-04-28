import React from "react";

function LostDetailPage() {
  // 더미 데이터 (실제 DB에서 불러오게 될 데이터)
  const item = {
    title: "검정색 지갑",
    location: "학생회관 1층",
    date: "2024-05-01",
    description: "검정색 가죽 지갑. 내부에 학생증과 현금이 있습니다.",
    image: "https://via.placeholder.com/150", // 이미지 (나중에 실제 사진으로 바꿀 수 있음)
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{item.title}</h1>
      <img src={item.image} alt={item.title} style={styles.image} />
      <p><strong>습득 장소:</strong> {item.location}</p>
      <p><strong>등록일:</strong> {item.date}</p>
      <p><strong>상세 설명:</strong> {item.description}</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  image: {
    width: "300px",
    height: "auto",
    borderRadius: "10px",
    marginBottom: "20px",
  },
};

export default LostDetailPage;

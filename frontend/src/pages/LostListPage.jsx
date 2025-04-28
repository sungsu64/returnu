import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LostListPage() {
  const navigate = useNavigate();
  const [lostItems, setLostItems] = useState([]);

  useEffect(() => {
    const fetchLostItems = async () => {
      try {
        const response = await axios.get("http://localhost:8090/api/lost-items");
        setLostItems(response.data);
      } catch (error) {
        console.error("분실물 목록 가져오기 실패:", error);
      }
    };

    fetchLostItems();
  }, []);

  const goToDetail = (id) => {
    navigate(`/lost-detail/${id}`);
  };

  return (
    <div style={{ padding: "50px" }}>
      {/* 제목 + 등록 버튼 */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1>분실물 목록</h1>
        <button
          onClick={() => navigate("/lost-create")}
          style={{
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          분실물 등록
        </button>
      </div>

      {/* 분실물 목록 카드 */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {lostItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "10px",
              cursor: "pointer",
              backgroundColor: item.claimed_by ? "#e0e0e0" : "white",
              position: "relative",
              opacity: item.claimed_by ? 0.6 : 1,
            }}
            onClick={() => goToDetail(item.id)}
          >
            <h2>{item.title}</h2>
            <p>습득 장소: {item.location}</p>
            <p>등록일: {item.date}</p>

            {/* 수령 완료 표시 */}
            {item.claimed_by && (
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "#28a745",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontSize: "0.8rem",
                }}
              >
                수령 완료
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LostListPage;

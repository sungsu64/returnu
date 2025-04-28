import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function LostDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const itemId = parseInt(id, 10);

  const [selectedItem, setSelectedItem] = useState(null);
  const [claimantName, setClaimantName] = useState("");

  useEffect(() => {
    // 컴포넌트가 처음 렌더링 될 때 서버에서 분실물 정보 가져오기
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/api/lost-item/${itemId}`);
        setSelectedItem(response.data);
      } catch (error) {
        console.error("분실물 가져오기 실패:", error);
        alert("분실물 정보를 불러올 수 없습니다.");
        navigate("/"); // 분실물 못 찾으면 메인페이지로 이동
      }
    };

    fetchItem();
  }, [itemId, navigate]);

  const handleClaim = async () => {
    if (!claimantName) {
      alert("수령자 이름을 입력하세요.");
      return;
    }

    try {
      await axios.post("http://localhost:8090/api/claim-item", {
        itemId: selectedItem.id,
        claimantName,
      });
      alert("수정이 완료되었습니다.");
      navigate("/");
    } catch (error) {
      console.error("수령 처리 오류:", error);
      alert("수령 처리에 실패했습니다.");
    }
  };

  if (!selectedItem) {
    return <div>로딩 중...</div>;
  }

  return (
    <div style={{ padding: "50px" }}>
      <h1>{selectedItem.title}</h1>
      <p><strong>습득 장소:</strong> {selectedItem.location}</p>
      <p><strong>등록일:</strong> {selectedItem.date}</p>
      <p><strong>상세 설명:</strong> {selectedItem.description}</p>

      {/* 수령자 입력창 */}
      <input
        type="text"
        placeholder="수령자 이름 입력"
        value={claimantName}
        onChange={(e) => setClaimantName(e.target.value)}
        style={{ width: "300px", padding: "10px", margin: "20px 0" }}
      />
      <br />

      {/* 수령 완료 버튼 */}
      <button
        onClick={handleClaim}
        style={{
          padding: "10px 20px",
          fontSize: "1.2rem",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        수령 완료
      </button>
    </div>
  );
}

export default LostDetailPage;

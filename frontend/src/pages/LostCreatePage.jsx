import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LostCreatePage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    location: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8090/api/lost-item", form);
      alert("분실물 등록 완료!");
      navigate("/lost-list"); // 등록 완료되면 목록으로 이동
    } catch (error) {
      console.error("분실물 등록 실패:", error);
      alert("등록 실패했습니다.");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>분실물 등록</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", width: "400px" }}>
        <input
          type="text"
          name="title"
          placeholder="물건 이름"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="습득 장소"
          value={form.location}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="상세 설명"
          value={form.description}
          onChange={handleChange}
          required
          rows="5"
        />
        <button
          type="submit"
          style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px" }}
        >
          등록하기
        </button>
      </form>
    </div>
  );
}

export default LostCreatePage;

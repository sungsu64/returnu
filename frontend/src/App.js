import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LostListPage from "./pages/LostListPage";
import LostDetailPage from "./pages/LostDetailPage"; // 추가!

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lost-list" element={<LostListPage />} />
        <Route path="/lost-detail/:id" element={<LostDetailPage />} /> {/* 추가 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

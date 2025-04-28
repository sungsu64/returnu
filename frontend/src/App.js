import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LostListPage from "./pages/LostListPage";
import LostDetailPage from "./pages/LostDetailPage";
import LostCreatePage from "./pages/LostCreatePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lost-list" element={<LostListPage />} />
        <Route path="/lost-detail/:id" element={<LostDetailPage />} /> {/* 이렇게 id도 경로에 표시 */}
        <Route path="/lost-create" element={<LostCreatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

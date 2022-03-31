import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryPage from '../pages/GalleryPage';
import DetailPage from '../pages/DetailPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          {/* 갤러리 페이지 */}
          <Route path="/" element={<GalleryPage />} />

          {/* 렌더샷 디테일 페이지 */}
          <Route path="/detail" element={<DetailPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

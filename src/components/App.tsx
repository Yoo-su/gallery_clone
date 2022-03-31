import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryPage from '../pages/GalleryPage';
import DetailPage from '../pages/DetailPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<GalleryPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

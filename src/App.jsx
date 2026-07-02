import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToHash from './components/ScrollToHash';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ExhibitionsPage from './pages/ExhibitionsPage';
import ExhibitionDetailPage from './pages/ExhibitionDetailPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/exhibitions" element={<ExhibitionsPage />} />
        <Route path="/exhibitions/:id" element={<ExhibitionDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

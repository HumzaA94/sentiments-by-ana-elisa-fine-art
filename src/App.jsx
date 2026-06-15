import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToHash from './components/ScrollToHash';
import HomePage from './pages/HomePage';
import ExhibitionsPage from './pages/ExhibitionsPage';
import ExhibitionDetailPage from './pages/ExhibitionDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exhibitions" element={<ExhibitionsPage />} />
        <Route path="/exhibitions/:id" element={<ExhibitionDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

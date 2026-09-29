import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Live from './pages/Live';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import MySpace from './pages/MySpace';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/accueil" replace />} />
          <Route path="/accueil" element={<Home />} />
          <Route path="/direct" element={<Live />} />
          <Route path="/recherche" element={<Search />} />
          <Route path="/favoris" element={<Favorites />} />
          <Route path="/mon-espace" element={<MySpace />} />
          <Route path="*" element={<Navigate to="/accueil" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
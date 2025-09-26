// src/Router.tsx

import { Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import LoginPage from './pages/LoginPage/LoginPage';

function AppRouter() {
  return (
      <Routes>                
      <Route path="/" element={<Mainpage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* ... 여기에 98개의 다른 Route들이 들어갑니다 ... */}
      <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
    </Routes>
  );
}

export default AppRouter;
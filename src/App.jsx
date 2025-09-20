import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home.jsx';


export default function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}


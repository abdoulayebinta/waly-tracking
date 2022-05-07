import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home, Dashboard, Register, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/register">Register</Link>
        <Link to="/home">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

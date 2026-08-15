import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

// For simplicity in this build, we are rendering Home for all routes
// But they can easily be separated into different pages later.
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Home />} />
        <Route path="menu" element={<Home />} />
        <Route path="gallery" element={<Home />} />
        <Route path="contact" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

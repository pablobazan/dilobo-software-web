import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyLovecraft from './pages/PrivacyLovecraft';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy/universo-lovecraft" element={<PrivacyLovecraft />} />
      </Routes>
    </Router>
  );
}

export default App;

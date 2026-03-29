import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyLovecraft from './pages/PrivacyLovecraft';
import PrivacyScreenPets from './pages/PrivacyScreenPets';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy/universo-lovecraft" element={<PrivacyLovecraft />} />
        <Route path="/privacy/screenpets" element={<PrivacyScreenPets />} />
      </Routes>
    </Router>
  );
}

export default App;

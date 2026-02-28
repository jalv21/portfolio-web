import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sobremim" element={<AboutMe />} />
      <Route path="/experiencias" element={<Experiences />} />
      <Route path="/projetos" element={<Projects />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  );
}

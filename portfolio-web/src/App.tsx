import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';

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

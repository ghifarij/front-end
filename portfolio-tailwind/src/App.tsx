import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import AboutPage from "./page/about";
import HomePage from "./page/home";
import "./styles.css";
import ProjectsPage from "./page/projects";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

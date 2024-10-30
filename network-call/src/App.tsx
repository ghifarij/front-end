import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./styles.css";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import DetailUserPage from "./pages/DetailUserPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/:userId" element={<DetailUserPage />} />
      </Routes>
    </div>
  );
}

export default App;

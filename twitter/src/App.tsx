import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import DashboardPage from "./pages/dashboardPage";
import "./styles.css";
import { AfterLogin, RequireLogin } from "./components/blocker";

function App() {
  return (
    <Routes>
      <Route element={<AfterLogin />}>
        {" "}
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route element={<RequireLogin />}>
        {" "}
        <Route path="/beranda" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}

export default App;

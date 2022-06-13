import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

// BrowserRouter as Router
function App() {
  /**
   * useHistory === useNavigate
   * useLocation
   * useParams
   * useRouteMatch === useMatch
   */
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:first/:last" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

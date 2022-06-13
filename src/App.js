import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Navbar from "./components/Navbar";

// BrowserRouter as Router
function App() {
  // const location = useLocation()
  /**
   * useHistory
   * useLocation
   * useParams
   * useRouteMatch
   */
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:first/:last" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

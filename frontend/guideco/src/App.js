import {
  Route,
  Routes,
  useNavigate,
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import Login from "./Login.js";
import Signin from "./Signin.js";
import Home from "./Home.js";
import RoutesPage from "./RoutesPage.js";
import Navbar from "./components/Navbar.js";
import Admin from "./Admin.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/rutas" element={<RoutesPage/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
    
        );
}

export default App;

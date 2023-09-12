import React from "react";
import { BrowserRouter as Router, Route, Link ,Routes} from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./login";

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/login" element={<Login />} />
      {/* Other routes */}

      </Routes>
     
    </Router>
  );
}

export default App;

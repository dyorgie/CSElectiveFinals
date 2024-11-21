import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavRoutes from "./navigation/NavRoutes";
import { UserProvider } from "./context/UserContext";
import Navbar from "./navigation/Navbar";

import About from "./pages/About";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <BrowserRouter>
          <About></About>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;

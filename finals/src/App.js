import "./App.css";

import Login from "./pages/Login";
import Navbar from "./navigation/Navbar";
import NavRoutes from "./navigation/NavRoutes";

import { UserProvider } from "./context/UserContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <NavRoutes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;

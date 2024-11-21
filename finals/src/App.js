import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavRoutes from "./navigation/NavRoutes";
import { UserProvider } from "./context/UserContext";
import Navbar from "./navigation/Navbar";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <NavRoutes></NavRoutes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;

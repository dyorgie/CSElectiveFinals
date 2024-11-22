import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavRoutes from "./navigation/NavRoutes";
import CartProvider from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import Navbar from "./navigation/Navbar";

function App() {
  return (
    <UserProvider>
      <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <NavRoutes></NavRoutes>
        </BrowserRouter>
      </div>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
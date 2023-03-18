import CartDetails from "./Component/Cart/CartDetails";
import Home from "./Component/HomePage/Home";
import Navbarr from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>

      <Router>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/cart/:id' element={<CartDetails />} />
        </Routes>
      </Router>


    </>
  );
}

export default App;

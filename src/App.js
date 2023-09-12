//CSS
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Other
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/global/navbar/navbar";
import Footer from "./components/global/footer/footer";
import Main from "./components/pages/main/main";
import Menu from "./components/pages/menu/menu";
import AboutUs from "./components/pages/about-us/about-us";
import Contact from "./components/pages/contact/contact";
import ProductDetail from "./components/pages/product-detail/product-detail";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <div className="Content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/menu/:category" element={<Menu />} />
            <Route
              path="/menu/products/:name/:no"
              element={<ProductDetail />}
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

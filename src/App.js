import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componet/Home/Home';
import CONTACT from './componet/Contect/Contect';
import Menu from './componet/menu/Menu';
import GALLERY from './componet/GALLERY/GALLERY';
import Blog from './componet/Blog/Blog';
import RESERVATION from './componet/RESERVATION';
// https://pnghut.com/png/FpgJC6tdLZ/indian-cuisine-chana-masala-chicken-tikka-dal-punjabi-dish-seafood-transparent-png
function App() {
  return (
    <>
      {/* <Home /> */}


      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Home />}>
          </Route>

          <Route path="/menu" element={<Menu />}>
          </Route>
          <Route path="/GALLERY" element={<GALLERY />}>
          </Route>
          <Route path="/blog" element={<Blog />}>
          </Route>

          <Route path="/Contact" element={<CONTACT />}>
          </Route>
          <Route path="/RESERVATION" element={<RESERVATION />}>
          </Route>
        </Routes>
      </BrowserRouter>




    </>
  );
}

export default App;

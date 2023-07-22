import './assets/SASS/App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error404 from './pages/404/Error404';
import Logement from './pages/Logement/Logement';

function App() {
  return (
    <>
    <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/page/" element={<Logement />}/>
          <Route path="/*" element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
  </>
  )
}

export default App

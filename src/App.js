import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import { BackTop } from "antd";
import { Farming, Home, NoPage } from "./Pages";

function App() {
  return (
    <div className="bg-neutral-950 font-poiret text-white scroll-smooth " >
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/farming' element={<Farming/>} />
        <Route path="/*" element={<NoPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>

    <BackTop />
    </div>
  );
}

export default App;

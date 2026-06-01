import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footers from "./components/Footers";
import Home from "./pages/Home";
import SobreNos from "./pages/SobreNos";
import Servicos from "./pages/Servicos";

function RouterApp() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/sobrenos" element={<SobreNos />} />
      </Routes>
      <Footers />
    </BrowserRouter>
  );
}

export default RouterApp;

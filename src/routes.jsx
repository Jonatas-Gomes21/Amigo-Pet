import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footers from "./components/Footers";
import Home from "./pages/Home";
import SobreNos from "./pages/SobreNos";
import Agendamento from "./pages/Agendamento";
import Servicos from "./pages/Servicos";
import ScrollToTop from "./components/ScrollToTop";

function RouterApp() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="/agendamento" element={<Agendamento />} />
      </Routes>
      <Footers />
    </BrowserRouter>
  );
}

export default RouterApp;

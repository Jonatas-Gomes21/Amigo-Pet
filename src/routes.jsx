import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footers from "./components/Footers";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const SobreNos = lazy(() => import("./pages/SobreNos"));
const Agendamento = lazy(() => import("./pages/Agendamento"));
const Servicos = lazy(() => import("./pages/Servicos"));

function RouterApp() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Suspense fallback={<div className="w-full min-h-screen bg-white" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/agendamento" element={<Agendamento />} />
        </Routes>
      </Suspense>

      <Footers />
    </BrowserRouter>
  );
}

export default RouterApp;
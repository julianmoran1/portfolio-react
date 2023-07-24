import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Inicio from './pages/Inicio';
import QuienSoy from "./pages/QuienSoy";
import Footer from "./components/Footer";
import ContentLayout from "./pages/ContentLayout";
import { corporativa, editorial, graficos, logotipos, web } from "./helper";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Inicio />} />
          <Route path="/quiensoy" element={<QuienSoy title="Quién soy" />} />
          <Route path="/grafico" element={<ContentLayout title="Diseño gráfico" category={graficos} />} />
          <Route path="/web" element={<ContentLayout title="Diseño web" category={web} />} />
          <Route path="/editorial" element={<ContentLayout title="Diseño editorial" category={editorial} />} />
          <Route path="/logotipos" element={<ContentLayout title="Logotipos" category={logotipos} />} />
          <Route path="/corporativa" element={<ContentLayout title="Imagen Corporativa" category={corporativa} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

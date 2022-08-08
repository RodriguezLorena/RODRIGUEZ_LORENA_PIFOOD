import { Routes, Route} from "react-router-dom"
import Detalle from "./paginas/Detalle/Detalle";
import Error404 from "./paginas/Error404/Error404";
import Formulario from "./paginas/Formulario/Formulario";
import Home from "./paginas/Home/Home";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<PaginaInicial/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/detalle/:id" element={<Detalle/>}/>
      <Route exact path="/formulario" element={<Formulario/>}/>
      <Route exact path="*" element={<Error404/>}/>
    </Routes>
  );
}

export default App;

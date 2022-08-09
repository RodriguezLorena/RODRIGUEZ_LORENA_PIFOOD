import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { traerLasRecetas } from "../../redux/action";

const Paginado = ({setPaginaEnEsteMomento, cantidadPorPagina, paginaEnEsteMomento}) => {
  const recetas = useSelector((state) => state.recetas);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(traerLasRecetas);
  }, [dispatch]);

 
  const volverAlaAnterior = () => {
    if (paginaEnEsteMomento === 1) return;
    setPaginaEnEsteMomento(paginaEnEsteMomento - 1);
  };

  const irAlaSiguiente = () => {
    if (paginaEnEsteMomento >= Math.ceil(recetas.length / cantidadPorPagina))
      return;
    setPaginaEnEsteMomento(paginaEnEsteMomento + 1);
  };

  const paginas = (numPag) => {
    setPaginaEnEsteMomento(numPag);
  };

  let numeroDePaginas = [];
  for (let i = 1; i <= Math.ceil(recetas.length / cantidadPorPagina); i++) {
    numeroDePaginas.push(i);
  }

  return (
    <div>
      <button onClick={volverAlaAnterior}>Pagina anterior</button>
      {numeroDePaginas &&
        numeroDePaginas.map((numero, index) => {
          return (
            <button key={index} onClick={() => paginas(numero)}>
              {numero}
            </button>
          );
        })}
      <button onClick={irAlaSiguiente}>Pagina siguiente</button>
    </div>
  );
};

export default Paginado;

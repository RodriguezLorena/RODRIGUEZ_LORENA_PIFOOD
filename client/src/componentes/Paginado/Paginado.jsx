import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { traerLasRecetas } from "../../redux/action";
import style from "./Paginado.module.css"

const Paginado = ({setPaginaEnEsteMomento, cantidadPorPagina, paginaEnEsteMomento}) => {
  const recetas = useSelector((state) => state.recetaModificable);
 
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
    <div className={style.contenedorPaginado}>
      <button className={style.boton} onClick={volverAlaAnterior}>Pagina anterior</button>
      {numeroDePaginas &&
        numeroDePaginas.map((numero, index) => {
          return numero !== paginaEnEsteMomento ? (
            <button className={style.pag} key={index} onClick={() => paginas(numero)}>
              {numero}
            </button>
          ): (
            <button
                    className={style.pagCurrent}
                    key={index}
                    onClick={() => paginas(numero)}
                  >
                    {numero}
                  </button>
          );
        })}
      <button className={style.boton} onClick={irAlaSiguiente}>Pagina siguiente</button>
    </div>
  );
};

export default Paginado;

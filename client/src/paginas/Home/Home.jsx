import React from "react";
import Tarjetas from "../../componentes/Trajetas/Tarjetas";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { traerLasRecetas } from "../../redux/action";
import Paginado from "../../componentes/Paginado/Paginado";
import { useState } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const receta = useSelector((state) => state.recetas);

  useEffect(() => {
    dispatch(traerLasRecetas());
  }, [dispatch]);

  //CORTE PARA EL PAGINADO:
  const [paginaEnEsteMomento, setPaginaEnEsteMomento] = useState(1);
  const cantidadPorPagina = 9;
  const indiceUno = paginaEnEsteMomento * cantidadPorPagina;
  const ultimoIndice = indiceUno - cantidadPorPagina;
  const listaDeRecetas = receta.slice(ultimoIndice, indiceUno);

  return (
    <div>
      <Paginado
        setPaginaEnEsteMomento={setPaginaEnEsteMomento}
        cantidadPorPagina={cantidadPorPagina}
        paginaEnEsteMomento={paginaEnEsteMomento}
      />
      <Tarjetas algo={listaDeRecetas} />
    </div>
  );
};

export default Home;

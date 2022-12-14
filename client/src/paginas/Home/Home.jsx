import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { traerLasRecetas } from "../../redux/action";
import Paginado from "../../componentes/Paginado/Paginado";
import { useState } from "react";
import Tarjetas from "../../componentes/Trajetas/Tarjetas";
import Encabezado from "../../componentes/Encabezado/Encabezado";
import BarraDeNavegacion from "../../componentes/BarraDeNavegacion.jsx/BarraDeNavegacion";
import Loading from "../../componentes/Loading/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const receta = useSelector((state) => state.recetaModificable);

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
      {receta.length > 0 ? (
        <div>
      <BarraDeNavegacion/>
      <Encabezado setPaginaEnEsteMomento={setPaginaEnEsteMomento}/>
      <Paginado
        setPaginaEnEsteMomento={setPaginaEnEsteMomento}
        cantidadPorPagina={cantidadPorPagina}
        paginaEnEsteMomento={paginaEnEsteMomento}
      />
      <div>
      <Tarjetas algo={listaDeRecetas} />
      </div>
      </div>
      ) : (
        <Loading />
      )
      }
    </div>
  );
};

export default Home;

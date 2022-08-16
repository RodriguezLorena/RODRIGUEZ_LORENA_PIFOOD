import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BarraDeNavegacion from "../../componentes/BarraDeNavegacion.jsx/BarraDeNavegacion";
import { detalleDeReceta, desmontarReceta } from "../../redux/action";
import Loading from "../../componentes/Loading/Loading";
import style from "./Detalle.module.css"

const Detalle = () => {
  const { id } = useParams();
  console.log("aca esta id ", id);

  const unaReceta = useSelector((state) => state.unaReceta);
  console.log("aca esta unaReceta ", unaReceta);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detalleDeReceta(id));
    return () => {
      dispatch(desmontarReceta());
    };
  }, [dispatch, id]);

  return (
    <div>
      <BarraDeNavegacion />
      {unaReceta?.id ? (
        <div className={style.contenedor}>
          <div className={style.contenedorDetalle}>
            <span className={style.span}>Codigo:</span>
            <h2>{unaReceta.id}</h2>
            <span className={style.span}>Nombre:</span>
            <h2>{unaReceta.nombre}</h2>
            <span className={style.span}> Dieta:</span>
            <span >
             
              {unaReceta.dieta?.map((ele, index) => (
                <p key={index}>{ele.nombre}</p>
              ))}
            </span>
            <span className={style.span}>Resumen del plato:</span>
            <p>{unaReceta.resumenDelPlato}</p>
            <span className={style.span}>Paso a paso:</span>
            <p>{unaReceta.pasoApaso}</p>
            <span className={style.span}>Puntaje de Salud:</span>
            <p>{unaReceta.puntajeDeSalud}</p>
            <img className={style.img} src={unaReceta.imagen} alt={unaReceta.nombre} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Detalle;

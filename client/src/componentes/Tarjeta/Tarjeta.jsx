import React from "react";
import { Link } from "react-router-dom";
import style from "./Tarjeta.module.css"

const Tarjeta = ({ imagen, nombre, dieta, id }) => {
  return (
    <div className={style.tarjetaContenedor}>
      <Link to={`/detalle/${id}`} className={style.link}>
      <span className={style.span}>Nombre:</span>
      <h2 className={style.nombre}>{nombre}</h2>
      <img className={style.img} src={imagen} alt={nombre} />
      <div className={style.span}>
        <span>Dietas:</span>
        {
        dieta && dieta.map((dieta, index) => <p className={style.dieta} key={index}>{dieta.nombre}</p>)
        }
      </div>
      </Link>
    </div>
  );
};

export default Tarjeta;


import React from "react";

const Tarjeta = ({ imagen, nombre, dieta }) => {
  return (
    <div>
      <span>Nombre:</span>
      <h2>{nombre}</h2>
      <img src={imagen} alt={nombre} />
      <div>
        <span>Dietas:</span>
        {
        dieta && dieta.map((dieta, index) => <p key={index}>{dieta.nombre}</p>)
        }
      </div>
    </div>
  );
};

export default Tarjeta;


import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  traerLasDietas,
  traerLasRecetas,
  formularioDeCreacion,
} from "../../redux/action";
import { Link, useNavigate } from "react-router-dom";

const Formulario = () => {
  const dispatch = useDispatch();
  const dieta = useSelector((state) => state.dietas);
  const [creacion, setCreacion] = useState("inicial");

  const recetas = useSelector((state) => state.recetas);

  useEffect(() => {
    dispatch(traerLasDietas());
    dispatch(traerLasRecetas());
  }, [dispatch]);

  const navegacionAutomatica = useNavigate();
  useEffect(() => {
    if (creacion === "creada") {
      alert("SE CREO LA NUEVA RECETA");
      setTimeout(() => {
        navegacionAutomatica("/home");
      });
    }
    if (creacion === "noCreada") {
      alert("NO SE CREO LA RECETA");
    }
  }, [creacion, navegacionAutomatica]);

  const [nuevaReceta, setNuevaReceta] = useState({
    nombre: "",
    dieta: [],
    resumenDelPlato: "",
    puntajeDeSalud: 0,
    pasoApaso: "",
    imagen: "",
  });

  const manipuladorInput = (e) => {
    setNuevaReceta({
      ...nuevaReceta,
      [e.target.name]: e.target.value,
    });
    setValidador(
      validador({
        ...nuevaReceta,
        [e.target.name]: e.target.value,
      })
    );
  };

  const ManipuladorDietas = (e) => {
    const seleccion = nuevaReceta.dieta.filter(
      (elemento) => elemento !== e.target.innerHTML
    );
    if (seleccion.includes(e.target.value)) {
      alert("YA HA ELEGIDO ESTA DIETA");
      setNuevaReceta({
        ...nuevaReceta,
        type: [...nuevaReceta.dieta],
      });
      setValidador({
        ...nuevaReceta,
        type: [...nuevaReceta.dieta],
      });
    } else {
      setNuevaReceta({
        ...nuevaReceta,
        type: [...nuevaReceta.dieta, e.target.value],
      });
      setValidador(
        validador({
          ...nuevaReceta,
          type: [...nuevaReceta.dieta, e.target.value],
        })
      );
    }
  };

  const eliminarDieta = (e) => {
    const seleccion = nuevaReceta.dieta.filter(
      (elemento) => elemento !== e.target.innerHTML
    );
    setNuevaReceta({
      ...nuevaReceta,
      dieta: seleccion,
    });
    setValidador(
      validador({
        ...nuevaReceta,
        dieta: [...seleccion],
      })
    );
  };

  const manipuladorDeCreacion = (e) => {
    e.preventDefault();
    if (Object.keys(validacion).length) {
      alert("TODOS LOS CAMPOS DEBEN ESTAR COMPLETOS");
    } else {
      if (Object.keys(validador(nuevaReceta)).length) {
        alert("LOS CAMPOS NO PUEDEN ESTAR VACIOS");
      } else {
        formularioDeCreacion(nuevaReceta)
          .then(() => {
            setCreacion("creada");
          })
          .catch(() => {
            setCreacion("noCreada");
          });
      }
    }
  };

  //VALIDACIONES:
  const [validador, setValidador] = useState({});

  const validacion = (nuevaReceta) => {
    let validar = {};
    let noContieneNumero = /[1-9]/;
    let sinEspacios = /[\s]/;

    if (sinEspacios.test(nuevaReceta.nombre))
      validar.nombre = "NO PUEDE CONTENER ESPACIOS";
    if (
      recetas.find(
        (elemento) =>
          elemento.nombre.toUpperCase() === nuevaReceta.nombre.toUpperCase()
      )
    ) {
      const recetaExistente = recetas.find(
        (elemento) =>
          elemento.nombre.toUpperCase() === nuevaReceta.nombre.toUpperCase()
      );
      validar.nombre = (
        <Link to={`/detalle/${recetaExistente.id}`}>
          YA TENEMOS ESTA RECETA EN NUESTRA BASE DE DATOS{" "}
          {recetaExistente.nombre}
        </Link>
      );
    }
    if (nuevaReceta.nombre.length < 5)
      validar.nombre = "NECESITA TENER UN MINIMO DE 5 CARACTERES";
    if (nuevaReceta.nombre.length > 50);
    validar.nombre = "NO PUEDE TENER MAS DE 50 CARACTERES";
    if (noContieneNumero.test(nuevaReceta.nombre))
      validar.nombre = "NO PUEDE CONTENER NUMEROS";
  };

  return (
    <div>
    <form onSubmit={manipuladorDeCreacion}>
      Formulario
      <label>
        NOMBRE:
        <input
          id="nombreInput"
          type="text"
          name="nombre"
          value={nuevaReceta.nombre}
          placeholder="ESCRIBE EL NOMBRE AQUÍ"
          onChange={(e) => manipuladorInput(e)}
        />
      </label>
      <label>
        RESUMEN DEL PLATO:
        <textarea
          type="text"
          name="resumenDelPlato"
          value={nuevaReceta.resumenDelPlato}
          placeholder="ESCRIBA UN RESUEMN DE SU PLATO AQUÍ"
          onChange={(e) => manipuladorInput(e)}
        />
      </label>
      <label>
        PASO A PASO:
        <textarea
          type="textarea"
          name="pasoApaso"
          value={nuevaReceta.pasoApaso}
          placeholder="ESCRIBA EL PASO A PASO DE SU PLATO AQUÍ"
          onChange={(e) => manipuladorInput(e)}
        />
      </label>
      <label>
        PUNTAJE DE SALUD:
        <input
          type="number"
          name="puntajeDeSalud"
          value={nuevaReceta.puntajeDeSalud}
          placeholder="COLOQUE EL PUNTAJE DE SALUD DE SU PLATO"
          onChange={(e) => manipuladorInput(e)}
        />
      </label>
      <label>
        IMAGEN:
        <input
          type="text"
          name="imagen"
          value={nuevaReceta.imagen}
          placeholder="COLOQUE UNA IMAGEN"
          onChange={(e) => manipuladorInput(e)}
        />
      </label>
      <label>
        SELECCIONA UNA DIETA:
        <select defaultValue={"default"} onChange={(e) => ManipuladorDietas(e)}>
          <option value="default">ELEGIR DIETA/S</option>
          {dieta && dieta.map(elemento=>{
            return(<option key={elemento.nombre} value={elemento.nombre}>{elemento.nombre}</option>)
          })}
        </select>
      </label>

      <div>
        <ul>
          {nuevaReceta.dieta.length > 0 ?(
              nuevaReceta.dieta.map((elemento)=>(
                <li key={elemento} onClick={(e)=> eliminarDieta(e)}>{elemento}</li>
              ))
            ):(
              <p></p>
            )}
        </ul>
      </div>
       <button onClick={(e)=>{manipuladorDeCreacion(e)}}>CREAR RECETA</button>
  </form>
    </div>
  );
};

export default Formulario;

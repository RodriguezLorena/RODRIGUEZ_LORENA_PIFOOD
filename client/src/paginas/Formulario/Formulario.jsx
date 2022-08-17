import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  traerLasDietas,
  traerLasRecetas,
  formularioDeCreacion,
} from "../../redux/action";
import { Link, useNavigate } from "react-router-dom";
import BarraDeNavegacion from "../../componentes/BarraDeNavegacion.jsx/BarraDeNavegacion";
import style from "./Formulario.module.css"

const Formulario = () => {
  const dispatch = useDispatch();
  const dietas = useSelector((state) => state.dietas);
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
    dietas:[],
    resumenDelPlato: "",
    puntajeDeSalud: 0,
    pasoApaso: "",
    imagen: ""
    
  });

  const manipuladorInput = (e) => {
    setNuevaReceta({
      ...nuevaReceta,
      [e.target.name]: e.target.value,
    });
    setValidador(
      validacion({
        ...nuevaReceta,
        [e.target.name]: e.target.value,
      })
    );
  };

  const ManipuladorDietas = (e) => {
    const selec = nuevaReceta.dietas.filter(
      (elemento) => elemento !== e.target.innerHTML
    )
    console.log("ACA ESTA SETNUEVARECETA ", selec)
    if (selec.includes(e.target.value)) {
      alert("YA HA ELEGIDO ESTA DIETA")
      
    } else {
        setNuevaReceta({
        ...nuevaReceta,
        dietas: [...nuevaReceta.dietas, e.target.value]
      })
      setValidador(
        validacion({
          ...nuevaReceta,
          dietas: [...nuevaReceta.dietas, e.target.value]
        })
      )
    }
    console.log("aca esta Nueva receta ", nuevaReceta.dietas)
  };
  

  const eliminarDieta = (e) => {
    const seleccion = nuevaReceta.dietas.filter(
      (elemento) => elemento !== e.target.innerHTML
    );
    
    setNuevaReceta({
      ...nuevaReceta,
      dietas: seleccion
    });
    
    setValidador(
      validacion({
        ...nuevaReceta,
        dietas: [...seleccion]
      })
    );
  };

  const manipuladorDeCreacion = (e) => {
    e.preventDefault();
    if (Object.keys(validador).length) {
      alert("TODOS LOS CAMPOS DEBEN ESTAR COMPLETOS");
    } else {
      if (Object.keys(validacion(nuevaReceta)).length) {
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

    if (nuevaReceta.nombre.length > 50)
      validar.nombre = "NO PUEDE TENER MAS DE 50 CARACTERES";
    if (nuevaReceta.nombre.length < 5)
      validar.nombre = "NECESITA TENER UN MINIMO DE 5 CARACTERES";
    if (sinEspacios.test(nuevaReceta.nombre[0]))
      validar.nombre = "NO PUEDE CONTENER ESPACIOS";
    if (noContieneNumero.test(nuevaReceta.nombre))
      validar.nombre = "NO PUEDE CONTENER NUMEROS";
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

    if (nuevaReceta.resumenDelPlato.length > 100)
      validar.resumenDelPlato = "NO PUEDE TENER MAS DE 100 CARACTERES";
    if (nuevaReceta.resumenDelPlato.length < 30)
      validar.resumenDelPlato = "NECESITA TENER UN MINIMO DE 30 CARACTERES";
    if (sinEspacios.test(nuevaReceta.resumenDelPlato[0]))
      validar.resumenDelPlato = "NO PUEDE SER ESPACIOS EN BLANCO";

    if (nuevaReceta.pasoApaso.length > 200)
      validar.pasoApaso = "NO PUEDE TENER MAS DE 100 CARACTERES";
    if (nuevaReceta.pasoApaso.length < 20)
      validar.pasoApaso = "NECESITA TENER UN MINIMO DE 30 CARACTERES";
    if (sinEspacios.test(nuevaReceta.pasoApaso[0]))
      validar.pasoApaso = "NO PUEDE SER ESPACIOS EN BLANCO";

    if (Number(nuevaReceta.puntajeDeSalud) < 1)
      validar.puntajeDeSalud = "TIENE QUE SER UN PUNTAJE MAYOR A 1 ";
    if (Number(nuevaReceta.puntajeDeSalud) > 100)
      validar.puntajeDeSalud = "NO PUEDE SER MAYOR A 100";
      
      if (!nuevaReceta.imagen) {
        validar.imagen = "IMAGEN ES REQUERIDA";
      } else if (
        !/(?:(?:https?:\/\/))[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/=]*(\.jpg|\.png|\.jpeg|\.webp))/.test(
          nuevaReceta.imagen
        )
      ) {
        validar.imagen = "INGRESE UNA URL VALIDA";
      }

    if (nuevaReceta.dietas.length === 0)
      validar.dietas = "DEBE CONTENER AL MENOS UNA DIETA";
      
    return validar;
  };

  return (
    <div>
      <BarraDeNavegacion/>
      <div className={style.contenedor}>
      <form className={style.contenedorForm} onSubmit={manipuladorDeCreacion}>
        <div className={style.form}>
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
          {validador.nombre ? <p className={style.validacion}>{validador.nombre}</p> : <p className={style.validacion}> </p>}
        </div>
        <div className={style.form}>
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
          {validador.resumenDelPlato ? (
            <p className={style.validacion}>{validador.resumenDelPlato}</p>
          ) : (
            <p className={style.validacion}> </p>
          )}
        </div>
        <div className={style.form}>
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
          {validador.pasoApaso ? <p className={style.validacion}>{validador.pasoApaso}</p> : <p className={style.validacion}> </p>}
        </div>
        <div className={style.form}>
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
          {validador.puntajeDeSalud ? (
            <p className={style.validacion}>{validador.puntajeDeSalud}</p>
          ) : (
            <p className={style.validacion}> </p>
          )}
        </div>
        <div className={style.form}>
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
          {validador.imagen ? <p className={style.validacion}>{validador.imagen}</p> : <p className={style.validacion}> </p>}
        </div>
        <div className={style.form}>
        <label>
          SELECCIONA UNA DIETA:
          <select
            defaultValue={"default"}
            onChange={(e) => ManipuladorDietas(e)}
          >
            <option value="default" disabled>ELEGIR DIETA/S</option>
            {dietas &&
              dietas.map((elemento, index) => {
                return (
                    <option key={index} value={elemento.nombre}>
                    {elemento.nombre}
                  </option>  
                )
              })}
          </select>
        </label>
        </div>
        <div>
          <ul>
            {nuevaReceta.dietas.length > 0 ? (
              nuevaReceta.dietas.map((elemento) => (
                <li key={elemento} onClick={(e) => eliminarDieta(e)}>
                  {elemento}
                </li>
              ))
            ) : (
              <p className={style.validacion}>{validador.dietas}</p>
            )}
          </ul>
        </div>
        <button className={style.boton}
          onClick={(e) => {
            manipuladorDeCreacion(e);
          }}
        >
          CREAR RECETA
        </button>
      </form>
    </div>
    </div>
  );
};

export default Formulario;

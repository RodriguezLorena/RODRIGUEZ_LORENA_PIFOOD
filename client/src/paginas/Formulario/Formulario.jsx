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
    dieta:[],
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
    const selec = nuevaReceta.dieta.filter(
      (elemento) => elemento !== e.target.innerHTML
    )
    console.log("ACA ESTA SETNUEVARECETA ", selec)
    if (selec.includes(e.target.value)) {
      alert("YA HA ELEGIDO ESTA DIETA")
      setNuevaReceta({
        ...nuevaReceta,
        dieta: [...nuevaReceta.dieta]
      })
      
      setValidador(
        validacion({
          ...nuevaReceta,
          dieta: [...nuevaReceta.dieta]
        })
      )
      
    } else {
        setNuevaReceta({
        ...nuevaReceta,
        dieta: [...nuevaReceta.dieta, e.target.value]
      })
      setValidador(
        validacion({
          ...nuevaReceta,
          dieta: [...nuevaReceta.dieta, e.target.value]
        })
      )
    }
  };

  const eliminarDieta = (e) => {
    const seleccion = nuevaReceta.dieta.filter(
      (elemento) => elemento !== e.target.innerHTML
    );
    
    setNuevaReceta({
      ...nuevaReceta,
      dieta: seleccion
    });
    
    setValidador(
      validacion({
        ...nuevaReceta,
        dieta: [...seleccion]
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
      
    if (!nuevaReceta.imagen.includes("https://"))
      validar.imagen = "Debe comenzar con https://";

    if (nuevaReceta.dieta.length === 0)
      validar.dieta = "DEBE CONTENER AL MENOS UNA DIETA";
      
    return validar;
  };

  return (
    <div>
      <BarraDeNavegacion/>
      <form onSubmit={manipuladorDeCreacion}>
        <div>
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
          {validador.nombre ? <p>{validador.nombre}</p> : <p> </p>}
        </div>
        <div>
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
            <p>{validador.resumenDelPlato}</p>
          ) : (
            <p> </p>
          )}
        </div>
        <div>
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
          {validador.pasoApaso ? <p>{validador.pasoApaso}</p> : <p> </p>}
        </div>
        <div>
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
            <p>{validador.puntajeDeSalud}</p>
          ) : (
            <p> </p>
          )}
        </div>
        <div>
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
          {validador.imagen ? <p>{validador.imagen}</p> : <p> </p>}
        </div>
        <div>
        <label>
          SELECCIONA UNA DIETA:
          <select
            defaultValue={"default"}
            onChange={(e) => ManipuladorDietas(e)}
          >
            <option value="default">ELEGIR DIETA/S</option>
            {dieta &&
              dieta.map((elemento) => {
                return (
                  <option key={elemento.nombre} value={elemento.nombre}>
                    {elemento.nombre}
                  </option>
                )
              })}
          </select>
        </label>
        </div>
        <div>
          <ul>
            {nuevaReceta.dieta.length > 0 ? (
              nuevaReceta.dieta.map((elemento) => (
                <li key={elemento} onClick={(e) => eliminarDieta(e)}>
                  {elemento}
                </li>
              ))
            ) : (
              <p>{validador.dieta}</p>
            )}
          </ul>
        </div>
        <button
          onClick={(e) => {
            manipuladorDeCreacion(e);
          }}
        >
          CREAR RECETA
        </button>
      </form>
    </div>
  );
};

export default Formulario;

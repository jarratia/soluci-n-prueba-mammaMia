import { useState, useEffect, useContext } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import PizzasContext from '../context/PizzasProvider';

const Detalle = () => {
  const { pizzas } = useContext(PizzasContext);
  const { id } = useParams();

  const obtenerDatos = () => {
    console.log(id);
    console.log(pizzas);
  };

  obtenerDatos();

  return (
    <div>
      <Outlet />
      Detalle de la pizza
    </div>
  );
};

export default Detalle;

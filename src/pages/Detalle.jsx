import { useState, useEffect, useContext } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PizzasContext from '../context/PizzasProvider';

import './Detalle.css';

const Detalle = () => {
  const [pizzaDetail, setPizzaDetail] = useState({});
  const { pizzas } = useContext(PizzasContext);
  const { id } = useParams();

  //   pizzas.forEach((pizza) => {
  //     pizza.ingredients.forEach((i) => {
  //       console.log(i);
  //     });
  //   });

  useEffect(() => {
    const obtenerDatos = () => {
      const datosPizza = pizzas.find((pizza) => pizza.id === id);

      setPizzaDetail(datosPizza);
    };
    obtenerDatos();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="card mb-3 estilos">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={pizzaDetail.img}
                className="img-fluid estilos rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title text-capitalize">
                  {pizzaDetail.name}
                </h5>
                <p className="card-text">{pizzaDetail.desc}</p>
                <ul>
                  {pizzas.map((pizza, i) => (
                    <li key={pizza.id}>&#127829; {pizza.ingredients[i]}</li>
                  ))}
                </ul>
                <div className="d-flex justify-content-around">
                  <h4>Precio: ${pizzaDetail.price}</h4>
                  <button className="btn btn-danger">Añadir &#128722;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalle;

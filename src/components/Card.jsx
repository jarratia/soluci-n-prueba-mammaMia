import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PizzasContext from '../context/PizzasProvider';
import { formatNumber } from '../helpers/formatNumber';

const Card = () => {
  const { pizzas } = useContext(PizzasContext);

  const navigate = useNavigate();
  return (
    <>
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="col">
          <div className="card">
            <img className="card-img-top" src={pizza.img} alt="" />
            <div className="card-body">
              <h4 className="card-title text-capitalize">{pizza.name}</h4>
              <hr />
              <p className="card-text">
                <b>Ingredientes:</b>
              </p>

              <ul>
                {pizzas.map((pizza, i) => (
                  <li key={i}>{pizza.ingredients[i]}</li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="card-body">
              <h2 className="text-center text-dark pb-3">
                $ {formatNumber(pizza.price)}
              </h2>

              <div className="d-flex justify-content-around">
                <button
                  to={`pizza/${pizza.id}`}
                  className="btn btn-info text-white"
                  onClick={() => navigate(`/pizzas/${pizza.id}`)}
                >
                  Ver Más &#128064;
                </button>

                <button className="btn btn-danger">Añadir &#128722;</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

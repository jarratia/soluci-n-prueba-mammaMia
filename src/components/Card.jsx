import { useContext } from 'react';
import PizzasContext from '../context/PizzasProvider';
import { formatNumber } from '../helpers/formatNumber';

const Card = () => {
  const { pizzas } = useContext(PizzasContext);
  return (
    <>
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="card w-100">
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
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

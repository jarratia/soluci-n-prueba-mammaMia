import { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import PizzasContext from '../context/PizzasProvider';

const DetallePedido = () => {
  const [contador, setContador] = useState(0);
  const [total, setTotal] = useState(0);
  const { carrito } = useContext(PizzasContext);

  const increment = () => {
    setContador(contador + 1);
  };

  const decrement = () => {
    setContador(contador - 1);
  };

  console.log(carrito);

  return (
    <>
      <Navbar />
      <div className="carrito p-5">
        <div className="detalles bg-light w-75 m-auto p-5">
          <h5>Detalles del pedido:</h5>
          <div className="p3 bg-white">
            {carrito.map((pizza, i) => (
              <div key={i}>
                <div className="d-flex justify-content-between align-items-center">
                  <img src={pizza.img} width="50" alt="" />
                  <h6 className="mb-0 text-capitalize p-2">{pizza.name}</h6>
                </div>

                <div className="d-flex justify-content-end align-items-center">
                  <h6 className="mb-0 p-2 text-success">${pizza.price}</h6>
                  <button
                    className="btn btn-danger"
                    onClick={() => decrement()}
                  >
                    -
                  </button>
                  <b className="mx-2">{contador}</b>
                  <button
                    className="btn btn-primary"
                    onClick={() => increment()}
                  >
                    +
                  </button>
                </div>

                <h2>Total: ${pizza.price * contador}</h2>
                <button className="btn btn-success">Ir a Pagar</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetallePedido;

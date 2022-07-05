import { createContext, useState, useEffect } from 'react';

// Creación del context
const PizzasContext = createContext();

// Provider con la fuente de datos
const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  // Obtener las pizzas
  const getPizzas = async () => {
    const res = await fetch('/pizzas.json');
    const pizzas = await res.json();
    setPizzas(pizzas);
  };

  // Funciones para el carro
  const addToCart = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <PizzasContext.Provider value={{ pizzas, carrito, setCarrito, addToCart }}>
      {children}
    </PizzasContext.Provider>
  );
};

// Export del provider
export { PizzasProvider };

// Export del context
export default PizzasContext;

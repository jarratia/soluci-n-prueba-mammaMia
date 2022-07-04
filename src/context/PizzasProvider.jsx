import { createContext, useState } from 'react';
import pizzasJson from '../pizzas.json';

// Creación del context
const PizzasContext = createContext();

// Provider con la fuente de datos
const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState(pizzasJson);
  return (
    <PizzasContext.Provider value={{ pizzas }}>
      {children}
    </PizzasContext.Provider>
  );
};

// Export del provider
export { PizzasProvider };

// Export del context
export default PizzasContext;

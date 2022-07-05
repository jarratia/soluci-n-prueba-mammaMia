import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PizzasProvider } from './context/PizzasProvider';
import Detalle from './pages/Detalle';
import DetallePedido from './pages/DetallePedido';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <PizzasProvider>
        <Routes>
          <Route path="pizzas/">
            <Route path=":id" element={<Detalle />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<DetallePedido />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PizzasProvider>
    </BrowserRouter>
  );
}

export default App;

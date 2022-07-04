import Card from './components/Card';
import Header from './components/Header';
import Navbar from './components/Navbar';
import PizzasList from './Containers/PizzasList';
import { PizzasProvider } from './context/PizzasProvider';

function App() {
  return (
    <PizzasProvider>
      <Navbar />
      <Header />
      <PizzasList>
        <Card />
      </PizzasList>
    </PizzasProvider>
  );
}

export default App;

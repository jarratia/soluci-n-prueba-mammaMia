import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar d-flex justify-content-between text-white py-3">
      <div className="container">
        <div className="d-flex">
          <Link to="/" className="logo-nombre mx-1 mb-0">
            Pizzería Mamma Mia!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

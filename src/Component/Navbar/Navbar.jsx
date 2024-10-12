import { Navbar } from "react-bootstrap";
import "./MyNavbar.css"; // Импортируем наш CSS
function MyNavbar({ energy, maxEnergy }) {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="d-flex flex-row align-items-center justify-content-between text-center align-middle mt-3"
    >
      <Navbar.Brand href="#home" className="custom-navbar-brand">
        {energy} / {maxEnergy}
      </Navbar.Brand>
      <div className="nav-link-custom">
        <button>
          <div className="imgEnergy me-2"></div>BOOST
        </button>
      </div>
    </Navbar>
  );
}

export default MyNavbar;

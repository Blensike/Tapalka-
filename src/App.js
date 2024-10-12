import { Container } from "react-bootstrap";
import ClickerGame from "./Component/MainCode/MainCode";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Container className="d-flex flex-column  px-4">
        <ClickerGame className="mb-5 " />
      </Container>
    </div>
  );
}

export default App;

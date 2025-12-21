import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer bienvenida="Hola, esta será una futura página de ventas" />
    </div>
  );
}

export default App;

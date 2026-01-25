import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer bienvenida="Hola, esta será una futura página de ventas" />
            }
          />

          <Route path="/category/:categoryId" element={<ItemListContainer />} />

          <Route path="/item/:itemId" element={<ItemDetailContainer />} />

          <Route path="*" element={<h2>Página no encontrada</h2>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

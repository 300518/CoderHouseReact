import logoTienda from '../assets/animeStoreChile.svg'
import CartWigdet from './CartWidget';

const Navbar = () => {
  return (
    <nav>
      <a href="">
        <img src={logoTienda} alt="logo"></img>
      </a>
      <a href="">Catalogo</a>
      <a href="">Ofertas</a>
      <a href="">Figuras de Acción</a>
      <a href="">Cartas TCG</a>
      <CartWigdet></CartWigdet>
    </nav>
  );
};

export default Navbar;

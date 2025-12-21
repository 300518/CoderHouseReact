import logoTienda from '../assets/animeStoreChile.svg'

const Navbar = () => {
  return (
    <nav>
      <a href="">
        <img src={logoTienda} alt="logo"></img>
      </a>
      <a href="">Catalogo</a>
      <a href="">Ofertas</a>
      <a href="">Contactenos</a>
    </nav>
  );
};

export default Navbar;

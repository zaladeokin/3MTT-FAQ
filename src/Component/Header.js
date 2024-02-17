import logo from '../img/logo.png'
import '../css/Header.css'

function Header(){
  return (
    <header>
      <img src={logo} alt='brand-logo' />
      <h1>AccessorizeMe</h1>
    </header>
  );
}

export default Header;
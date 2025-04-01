import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import {Link} from 'react-router-dom';

const Navbar = () => {
  const clickMenuBurger=()=>{
    const burger=document.querySelector(".menu-burger");
    const navigation=document.querySelector("header nav");

    navigation.classList.toggle("active");

  }
  return (
    <header className="home">
      <div className="">
        <h1>sneakers</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a className="" href="/home">
              Home
            </a>
          </li>
          <li>
            <a className="" href="#one">
              A la une
            </a>
          </li>
          <li>
            <a className="boutique" href="#boutique">
              Boutique
            </a>
          </li>

          <li>
            <a className="arrivage" href="#arrivage">
              Arrivages
            </a>
          </li>
          <li>
            <a className="contact" href="#contact">
              Newsletter
            </a>
          </li>
        </ul>
      </nav>
      <div className="">
        <FontAwesomeIcon icon={faBars} className="menu-burger" onClick={clickMenuBurger}  />
        {/* <select>
          <option><a href="">Se connecter</a></option>
          <option><a href="">S'inscrire</a></option>
          
        </select> */}
      </div>
    </header>
  );
};

export default Navbar;

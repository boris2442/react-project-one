// import {Link} from 'react-router-dom';

const navbar = () => {
  return (
    <header className="home">
      <div className="">
        <h1>sneakers</h1>
      </div>
      <nav>
        <ul>
        <li>
            <a className=""  href="/home">Home</a>
          </li>
          <li>
            <a className="" href="#one">A la une</a>
          </li>
          <li>
            <a className="boutique" href="#boutique">Boutique</a>
          </li>
          
          <li>
            <a className="arrivage" href="#arrivage">Arrivages</a>
          </li>
          <li>
            <a className="contact" href="#contact">Newsletter</a>
          </li>
        </ul>
        
      </nav>
    </header>
  );
};

export default navbar;

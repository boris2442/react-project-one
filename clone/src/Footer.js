import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="container-footer">
          <div className="boxfooter">
            <h2 className="">Pages</h2>
            <p>
             
              <HashLink smooth to="/#home">Home</HashLink>
            </p>
            <p>
    
              <HashLink smooth to="/#one">A la une</HashLink>
            </p>
            <p>
      
              <HashLink smooth to="/#boutique">Boutique</HashLink>
            </p>
            <p>
         
              <HashLink smooth to="/#arrivage">Arrivages</HashLink>
            </p>
          </div>
          <div className="box-footer">
            <h2 className="">Autres</h2>
            <p className="">
              <Link to="/mentionLegales">Mentions Legale</Link>
            </p>

            <p className="">
              <Link to="/conditiondevente">Condition e vente</Link>
            </p>
            <p className="">
              <a href="">P0litique de confidentialite</a>
            </p>
            <p className="">
              <a href="">Condition de remboursement</a>
            </p>
          </div>
          <div className="box-footer">
            <h2 className="">Contact</h2>
            <p className="">Bafoussam Cameroon</p>
            <p className=""> <Link to="https://wa.me/679135177">(+237)  694 22 35 03</Link></p>
            <p className="">
              <Link to="mailto:aubinborissimotsebo@gmail.com">sneakers@gmail.com</Link>
            </p>
          </div>
        </div>
        <p className="droits">Tous droits reserves. By simo dev  679 13 5 77</p>
      </footer>
    </>
  );
};

export default Footer;

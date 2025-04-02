import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="container-footer">
          <div className="boxfooter">
            <h2 className="">Pages</h2>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/">Nouveautes</a>
            </p>
            <p>
              <Link to="/">Boutique</Link>
            </p>
            <p>
              <a href="/">Arrivages</a>
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
            <p className="(+237)  694 22 35 03"></p>
            <p className="">
              <a>sneakers@gmail.com</a>
            </p>
          </div>
        </div>
        <p className="droits">Tous droits reserves. By simo dev</p>
      </footer>
    </>
  );
};

export default Footer;

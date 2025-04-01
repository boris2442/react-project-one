import Navbar from "./Navbar";
import Footer from "./Footer";
const MentionLegales = () => {
    return (
       <>
        <div className="">
    <Navbar />
    <div className="">
    <h1 className="">Information sur SNEAKERS</h1>
    <ol>
      <li>Nom de l'entreprise:SNEAKERS</li>
      <li>Statut juridique:SARL, SAS, Auto-entrepreneur</li>
      <li>Numéro d'immatriculation:RCCM, numéro SIRET si applicable</li>
      <li>Adresse du siège social:683783828</li>
      <li>Téléphone et Email de contact</li>
      <li>Nom du directeur de publication</li>
    </ol>
    </div>
    <div className="">
        <h2>Hebergement du site</h2>
        <ol>
            <li>Nom de l’hébergeur</li>
            <li>Adresse de l’hébergeur</li>
            <li>Contact de l’hébergeur</li>
        </ol>
    </div>
    <Footer/>
    </div>
 </>;

    )
};

export default MentionLegales;

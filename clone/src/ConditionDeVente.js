const ConditionDeVente = () => {
  return (
    <div>
      <h2>Produits et prix</h2>
      <ol>
        <li>
          Description des chaussures:
          <span>materiels utiise est le plastique guineen</span>
        </li>
        <li>
          Prix affichés:<span>Inclut les taxes et impots communaux</span>
        </li>
        <li>
          Possibilité de modification des prix sans préavis:
          <span>Uniquement dans les cas precis</span>
        </li>
      </ol>
      <h2>Commande</h2>
      <ol>
        <li>
          Processus de commande :
          <span>ajout au panier, validation, paiement</span>
        </li>
        <li>
          <span>Confirmation de commande par email</span>
        </li>
        <li>
          Droit de refus ou d’annulation d’une commande{" "}
          <span> (fraude, problème de stock, etc.)</span>
        </li>
      </ol>
      <h2>Paiement</h2>
      <ol>
        <li>
          Moyens de paiement acceptés{" "}
          <span>carte bancaire, mobile money, PayPal, virement</span>
        </li>
        <li>
          Sécurisation des paiements<span></span>
        </li>
        <li>
          Délais et modalités de paiement<span></span>
        </li>
      </ol>
    </div>
  );
};

export default ConditionDeVente;

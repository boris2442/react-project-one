import { useState } from "react";
const LiorChamla = () => {
  
  const [clients, setClients] = useState([
    { name: "Simo Aubin", id: 1 },
    { name: "Boris Aubin", id: 2 },
    { name: "Pablo frere", id: 3 },
  ]);
  const title = "Listes des clients...";

  const elements = clients.map((client) => (
    <li key="client.id">
      {client.name} <button>X</button>
    </li>
  ));
  const handleClick=()=>{
alert("hello la famille de client");
  }
  return (
    <div>
      <h4>{title}</h4>
      <button onClick={handleClick}>Click moi!!!</button>
      <ul>
       {elements}
      </ul>
      <form action="">
        <input type="text" placeholder="Ajouter un client" />
        <button>Envoyer</button>
      </form>
    </div>
  );
};

export default LiorChamla;

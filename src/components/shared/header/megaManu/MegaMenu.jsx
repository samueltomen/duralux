import React, { useState } from "react";

const MegaMenu = () => {
  const [selectedClient, setSelectedClient] = useState("CLIENTS FACTORY");

  // Liste des clients
  const clients = [
    { value: "ALL", label: "ClENTS FACTORY" },
    { value: "ALS", label: "ALTARES" },
    { value: "BMTP", label: "BERGERAT MONNOYEUR SAS" },
    { value: "CCI", label: "CCI Paris IDF" },
    { value: "CG92", label: "CD92 - ENC" },
    { value: "CGP", label: "CENTRE POMPIDOU" },
    { value: "CRIDF", label: "CRIDF" },
    { value: "CD92", label: "DEPARTEMENT DES HAUTS DE SEINE" },
    { value: "ESCP", label: "École Supérieure de Commerce de Paris" },
    { value: "FAFTT", label: "FAF.TT" },
    { value: "FUN", label: "FUNECAP" },
    { value: "GALEC", label: "GALEC" },
    { value: "ICDC", label: "ICDC" },
    { value: "INV", label: "INVIVO GROUP" },
    { value: "KPMG", label: "KPMG" },
    { value: "LDS", label: "Lefebvre Dalloz Sarrut" },
    { value: "CSI", label: "Neurones IT - CSI" },
    { value: "IIN", label: "Neurones IT - IIN" },
    { value: "PAI", label: "PAI PARTNERS" },
    { value: "ROU", label: "ROUGIER" },
    { value: "SYN", label: "Seine et Yvelines Numeriques" },
    { value: "STA", label: "STAGO" },
    { value: "VINCI", label: "VINCI IMMOBILIER PROMOTION" },
  ];

  const handleClientClick = (clientLabel) => {
    setSelectedClient(clientLabel);
    // Je laisse le console.log afin de charger ici les données futures du client
    console.log(`Client sélectionné : ${clientLabel}`);
  };

  return (
    <div className="dropdown nxl-h-item nxl-mega-menu">
      <a
        href="#"
        className="btn btn-light-brand"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
      >
        {selectedClient}
      </a>
      <div
        className="dropdown-menu nxl-h-dropdown"
        style={{ maxHeight: "300px", overflowY: "auto" }}
      >
        {clients.map((client) => (
          <a
            key={client.value}
            href="#"
            className="dropdown-item"
            onClick={(e) => {
              e.preventDefault();
              handleClientClick(client.label);
            }}
          >
            {client.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
